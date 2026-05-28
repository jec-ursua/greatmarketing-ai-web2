#!/usr/bin/env node
/**
 * sync-blog-images.mjs
 *
 * Copies image files from co-located blog folders into /public/blog/
 * so Next.js can serve them as static assets.
 *
 * Source layout:
 *   content/blog/<slug>/
 *     ├── index.mdx
 *     ├── hero.webp
 *     ├── case-types.webp
 *     └── ... (any images)
 *
 * Output:
 *   public/blog/<slug>/
 *     ├── hero.webp
 *     ├── case-types.webp
 *     └── ...
 *
 * Behavior:
 *   - Only copies image files (.png .jpg .jpeg .webp .gif .svg .avif)
 *   - Skips index.mdx and any non-image files
 *   - Idempotent: only copies if source is newer than destination (mtime)
 *   - Does NOT delete extra files in public/blog/<slug>/
 *     (so legacy SVG placeholders survive until you clean them up)
 *   - Runs automatically via `predev` and `prebuild` scripts in package.json
 *
 * Manual run:
 *   node scripts/sync-blog-images.mjs
 *   node scripts/sync-blog-images.mjs --verbose       # log every file
 *   node scripts/sync-blog-images.mjs --force         # overwrite even if older
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(REPO_ROOT, "content", "blog");
const PUBLIC_DIR = path.join(REPO_ROOT, "public", "blog");

const VERBOSE = process.argv.includes("--verbose");
const FORCE = process.argv.includes("--force");

const IMAGE_EXTS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
]);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function isImageFile(name) {
  return IMAGE_EXTS.has(path.extname(name).toLowerCase());
}

function needsCopy(srcPath, destPath) {
  if (FORCE) return true;
  if (!fs.existsSync(destPath)) return true;
  const srcStat = fs.statSync(srcPath);
  const destStat = fs.statSync(destPath);
  // Different size or newer source = needs copy
  if (srcStat.size !== destStat.size) return true;
  if (srcStat.mtimeMs > destStat.mtimeMs) return true;
  return false;
}

function copyBlogFolder(slug) {
  const srcDir = path.join(CONTENT_DIR, slug);
  const destDir = path.join(PUBLIC_DIR, slug);

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  let copied = 0;
  let skipped = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!isImageFile(entry.name)) continue;

    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (!needsCopy(srcPath, destPath)) {
      skipped++;
      if (VERBOSE) console.log(`  · ${slug}/${entry.name}  (unchanged)`);
      continue;
    }

    ensureDir(destDir);
    fs.copyFileSync(srcPath, destPath);
    // Do NOT restore mtime — letting dest have a "now" mtime means future
    // runs correctly detect when source has been modified (src.mtime would
    // then exceed dest.mtime). Trying to preserve nanosecond mtime causes
    // precision-loss false positives that re-copy every run.

    copied++;
    if (VERBOSE) console.log(`  ✓ ${slug}/${entry.name}`);
  }

  return { copied, skipped };
}

function main() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.warn(`[sync-blog-images] content/blog directory not found, skipping.`);
    return;
  }

  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  const blogSlugs = entries
    .filter((e) => e.isDirectory())
    .filter((e) => !e.name.startsWith("_") && !e.name.startsWith("."))
    .map((e) => e.name)
    .filter((slug) => {
      // Only sync folders that look like a co-located blog (have index.mdx)
      const indexPath = path.join(CONTENT_DIR, slug, "index.mdx");
      return fs.existsSync(indexPath);
    });

  if (blogSlugs.length === 0) {
    if (VERBOSE) console.log("[sync-blog-images] No co-located blogs found.");
    return;
  }

  let totalCopied = 0;
  let totalSkipped = 0;
  for (const slug of blogSlugs) {
    const { copied, skipped } = copyBlogFolder(slug);
    totalCopied += copied;
    totalSkipped += skipped;
  }

  if (totalCopied > 0 || VERBOSE) {
    console.log(
      `[sync-blog-images] ${totalCopied} copied, ${totalSkipped} unchanged across ${blogSlugs.length} blog folder(s).`
    );
  }
}

try {
  main();
} catch (err) {
  console.error("[sync-blog-images] FAILED:", err);
  process.exit(1);
}

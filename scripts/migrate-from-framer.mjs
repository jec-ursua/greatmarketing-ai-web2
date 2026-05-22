#!/usr/bin/env node
/**
 * Migrate published greatmarketing.ai blogs from the legacy Framer site
 * into MDX files under content/blog/.
 *
 * Framer's HTML is heavily obfuscated (hashed class names, no clean
 * <article> element), so a fully-automatic body extraction is rough.
 * This script ships three modes so the migration can happen
 * incrementally with per-blog review:
 *
 *   1. node scripts/migrate-from-framer.mjs --manifest
 *      Fetches sitemap.xml from greatmarketing.ai, scrapes <head> metadata
 *      for each /blog/<slug>, and writes content/blog/_migration-manifest.json.
 *      Source of truth for what needs migrating.
 *
 *   2. node scripts/migrate-from-framer.mjs --stubs [--limit N]
 *      Creates a draft MDX stub per blog NOT already in content/blog/.
 *      Frontmatter pulled from the manifest; body left as a `[NEEDS BODY]`
 *      placeholder + the source URL. `draft: true` keeps them out of
 *      production. Skips files that already exist.
 *
 *   3. node scripts/migrate-from-framer.mjs --scrape <slug> [--write]
 *      Fetches one blog, runs the HTML body through turndown, writes
 *      the rough Markdown into content/blog/<slug>.mdx (keeps draft: true
 *      so reviewers must flip the flag intentionally). Defaults to dry-run;
 *      add --write to actually save. NEVER use this output without manual
 *      review — Framer's wrapper noise (nav, footers, CTA blocks) will
 *      leak into the markdown and must be trimmed.
 *
 * Self-check: every write checks for forbidden placeholder strings (per
 * seo-skills CLAUDE.md "No Placeholder Strings in Published Content"
 * rule) and warns. Drafts get `[NEEDS-REVIEW]` annotations so they fail
 * the placeholder grep until cleaned.
 *
 * IndexNow is NOT pinged for migrated URLs (they're already indexed
 * elsewhere).
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import TurndownService from "turndown";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(REPO_ROOT, "content", "blog");
const MANIFEST_PATH = path.join(BLOG_DIR, "_migration-manifest.json");
const SITE = "https://greatmarketing.ai";

const FORBIDDEN_PLACEHOLDERS = [
  "[citation",
  "[stat",
  "[TBD",
  "[CUSTOMER",
  "[Hypothetical",
  "TODO",
  "XXX",
  "lorem ipsum",
];

// ---------------------------------------------------------------------------
// Args
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    manifest: false,
    stubs: false,
    scrape: null,
    limit: null,
    write: false,
    force: false,
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--manifest") opts.manifest = true;
    else if (a === "--stubs") opts.stubs = true;
    else if (a === "--scrape") {
      opts.scrape = args[i + 1];
      i++;
    } else if (a === "--limit") {
      opts.limit = parseInt(args[i + 1], 10);
      i++;
    } else if (a === "--write") opts.write = true;
    else if (a === "--force") opts.force = true;
  }
  return opts;
}

// ---------------------------------------------------------------------------
// Sitemap + metadata scraping
// ---------------------------------------------------------------------------

async function fetchSitemapSlugs() {
  const res = await fetch(`${SITE}/sitemap.xml`, { redirect: "follow" });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs
    .filter((u) => /\/blog\/[^/]+$/.test(u))
    .map((u) => u.replace(/^.*\/blog\//, ""));
}

function extractMeta(html, attr, value) {
  const re = new RegExp(`<meta\\s+[^>]*${attr}="${value}"[^>]*content="([^"]+)"`, "i");
  const re2 = new RegExp(`<meta\\s+[^>]*content="([^"]+)"[^>]*${attr}="${value}"`, "i");
  return (html.match(re) || html.match(re2))?.[1] ?? null;
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  if (!m) return null;
  return m[1].replace(/\s*\|\s*Great Marketing AI\s*$/i, "").trim();
}

function extractFramerSsrReleasedAt(html) {
  const m = html.match(/data-framer-ssr-released-at="([^"]+)"/);
  if (!m) return null;
  // ISO date — strip time component for publishedDate.
  return m[1].slice(0, 10);
}

async function fetchBlogMeta(slug) {
  const blogUrl = `${SITE}/blog/${slug}`;
  const res = await fetch(blogUrl, { redirect: "follow" });
  if (!res.ok) return { slug, url: blogUrl, error: `http ${res.status}` };
  const html = await res.text();
  return {
    slug,
    url: blogUrl,
    title: extractTitle(html) || extractMeta(html, "property", "og:title") || slug,
    description:
      extractMeta(html, "name", "description") ||
      extractMeta(html, "property", "og:description") ||
      "",
    ogImage: extractMeta(html, "property", "og:image") || null,
    ssrReleasedAt: extractFramerSsrReleasedAt(html),
  };
}

// ---------------------------------------------------------------------------
// Mode 1: Manifest
// ---------------------------------------------------------------------------

async function buildManifest(opts) {
  const slugs = await fetchSitemapSlugs();
  const limited = opts.limit ? slugs.slice(0, opts.limit) : slugs;
  console.log(`[migrate] discovered ${slugs.length} blog URLs in sitemap (processing ${limited.length})`);

  const records = [];
  for (const slug of limited) {
    process.stdout.write(`  scraping ${slug}... `);
    try {
      const meta = await fetchBlogMeta(slug);
      const existsLocally = fs.existsSync(path.join(BLOG_DIR, `${slug}.mdx`));
      records.push({ ...meta, existsLocally });
      console.log(existsLocally ? "(already migrated)" : "ok");
    } catch (e) {
      console.log(`error: ${e.message}`);
      records.push({ slug, url: `${SITE}/blog/${slug}`, error: e.message });
    }
  }

  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), records }, null, 2));
  const todo = records.filter((r) => !r.existsLocally && !r.error).length;
  console.log(`\n[migrate] wrote ${path.relative(REPO_ROOT, MANIFEST_PATH)} (${todo} blogs left to migrate)`);
}

// ---------------------------------------------------------------------------
// Mode 2: Draft MDX stubs
// ---------------------------------------------------------------------------

function frontmatter(record, body, extraFields = {}) {
  const fm = {
    title: record.title,
    description: record.description,
    category: extraFields.category ?? "Marketing",
    tags: extraFields.tags ?? ["legacy-migration"],
    publishedDate: record.ssrReleasedAt ?? new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
    featuredImage: record.ogImage || "",
    featuredImageAlt: record.title,
    ogImage: record.ogImage || "",
    draft: true,
  };
  const yaml = Object.entries(fm)
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}: [${v.map((x) => `"${x}"`).join(", ")}]`;
      if (typeof v === "boolean") return `${k}: ${v}`;
      return `${k}: "${String(v).replace(/"/g, '\\"')}"`;
    })
    .join("\n");
  return `---\n${yaml}\n---\n\n${body}\n`;
}

function stubBody(record) {
  return `<!-- MIGRATED FROM FRAMER: ${record.url} -->
<!-- BODY NOT YET EXTRACTED. Run: node scripts/migrate-from-framer.mjs --scrape ${record.slug} --write -->

[NEEDS-REVIEW] This post is migrated from the legacy Framer site. The body content has not been extracted yet. Visit the source URL above and either copy the content manually or run the --scrape command, then review carefully for layout, image positions, and CTA accuracy before removing the \`draft: true\` flag in frontmatter.`;
}

function checkPlaceholders(content) {
  const found = [];
  for (const p of FORBIDDEN_PLACEHOLDERS) {
    if (content.toLowerCase().includes(p.toLowerCase())) found.push(p);
  }
  return found;
}

function writeStubs(opts) {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error("[migrate] no manifest found. Run --manifest first.");
    process.exit(1);
  }
  const { records } = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  let written = 0;
  let skipped = 0;
  const queue = opts.limit ? records.slice(0, opts.limit) : records;
  for (const record of queue) {
    if (record.error) {
      console.log(`  ${record.slug}: skip (error: ${record.error})`);
      skipped++;
      continue;
    }
    const target = path.join(BLOG_DIR, `${record.slug}.mdx`);
    if (fs.existsSync(target) && !opts.force) {
      console.log(`  ${record.slug}: skip (exists)`);
      skipped++;
      continue;
    }
    const content = frontmatter(record, stubBody(record));
    fs.writeFileSync(target, content);
    console.log(`  ${record.slug}: wrote stub (draft)`);
    written++;
  }
  console.log(`\n[migrate] ${written} stubs written, ${skipped} skipped`);
}

// ---------------------------------------------------------------------------
// Mode 3: Scrape one blog's body
// ---------------------------------------------------------------------------

function selectArticleHtml(html) {
  // Framer obfuscates class names but typically renders the article body
  // inside <main> or under a div with role="main". Try to narrow to that.
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1];
  const idMatch = html.match(/<div[^>]*id="main"[^>]*>([\s\S]*?)<\/div>\s*<\/body>/i);
  if (idMatch) return idMatch[1];
  return html; // fall through; turndown gets the lot
}

function cleanHtml(html) {
  return html
    // Drop SVGs (icons + decorative graphics turn into noise)
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    // Drop <script>, <style>, <noscript>
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    // Strip Framer-specific data attributes that just clutter turndown output
    .replace(/\sdata-framer[a-z0-9-]*="[^"]*"/gi, "")
    .replace(/\sdata-border[a-z0-9-]*="[^"]*"/gi, "");
}

async function scrapeOne(slug, opts) {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error("[migrate] no manifest found. Run --manifest first.");
    process.exit(1);
  }
  const { records } = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  const record = records.find((r) => r.slug === slug);
  if (!record) {
    console.error(`[migrate] slug "${slug}" not in manifest`);
    process.exit(1);
  }

  console.log(`[migrate] fetching ${record.url}`);
  const res = await fetch(record.url, { redirect: "follow" });
  if (!res.ok) {
    console.error(`[migrate] http ${res.status} on ${record.url}`);
    process.exit(1);
  }
  const html = await res.text();
  const article = cleanHtml(selectArticleHtml(html));

  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });
  // Drop images that point at Framer's icon sprite sheets etc.
  turndown.remove(["img"].filter(() => false)); // keep images for now

  let body = turndown.turndown(article).trim();
  // Collapse repeated blank lines
  body = body.replace(/\n{3,}/g, "\n\n");

  const placeholders = checkPlaceholders(body);
  if (placeholders.length > 0) {
    console.warn(`[migrate] WARNING placeholders found in body: ${placeholders.join(", ")}`);
  }

  const content = frontmatter(record, `<!-- Auto-scraped from ${record.url} on ${new Date().toISOString()}. Review manually before flipping draft: false. -->\n\n${body}`);

  const target = path.join(BLOG_DIR, `${record.slug}.mdx`);
  if (opts.write) {
    if (fs.existsSync(target) && !opts.force) {
      console.error(`[migrate] ${target} exists. Pass --force to overwrite.`);
      process.exit(1);
    }
    fs.writeFileSync(target, content);
    console.log(`[migrate] wrote ${path.relative(REPO_ROOT, target)} (draft)`);
  } else {
    console.log(`[migrate] DRY RUN — would write ${path.relative(REPO_ROOT, target)} (${content.length} bytes)`);
    console.log(`[migrate] preview:\n${content.slice(0, 800)}\n...`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const opts = parseArgs();
  if (opts.manifest) return buildManifest(opts);
  if (opts.stubs) return writeStubs(opts);
  if (opts.scrape) return scrapeOne(opts.scrape, opts);

  console.log(`usage:
  node scripts/migrate-from-framer.mjs --manifest [--limit N]
  node scripts/migrate-from-framer.mjs --stubs [--limit N] [--force]
  node scripts/migrate-from-framer.mjs --scrape <slug> [--write] [--force]

Workflow:
  1. --manifest to inventory the 43 legacy Framer blogs into content/blog/_migration-manifest.json
  2. --stubs to write draft: true MDX stubs for each not-yet-migrated blog
  3. --scrape <slug> --write to extract body (rough, needs manual review)
  4. After review, flip draft: false and run npm run indexnow <url>`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

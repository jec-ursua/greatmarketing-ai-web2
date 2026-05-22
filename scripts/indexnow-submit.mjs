#!/usr/bin/env node
/**
 * Submit URLs to IndexNow so Bing (and therefore ChatGPT real-time search)
 * indexes them within minutes instead of days.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs <url> [<url>...]
 *   node scripts/indexnow-submit.mjs --sitemap          # submits every <loc> in /sitemap.xml
 *   node scripts/indexnow-submit.mjs --recent 10        # N most-recently-modified non-draft MDX
 *
 * Run after publishing a new post or refreshing one substantively. Do NOT
 * blast --sitemap on every push; Bing rate-limits at 10 submissions per URL
 * per day and treats excessive pinging as a quality signal.
 *
 * The host key file MUST be deployed to https://www.greatmarketing.ai/<KEY>.txt
 * with the key value as its only content. The file lives at
 * public/<KEY>.txt in this repo; Vercel serves it from the site root.
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const HOST = "www.greatmarketing.ai";
const KEY = "2799b3920b7af6cb1bcd1ed97c776ee4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { urls: [], sitemap: false, recent: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--sitemap") opts.sitemap = true;
    else if (args[i] === "--recent") {
      opts.recent = parseInt(args[i + 1] || "10", 10);
      i++;
    } else if (args[i].startsWith("http")) {
      opts.urls.push(args[i]);
    }
  }
  return opts;
}

async function fetchSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

function recentMdxUrls(limit) {
  const repoRoot = process.cwd();
  const dir = join(repoRoot, "content/blog");
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  const files = [];
  for (const f of entries) {
    if (!f.endsWith(".mdx")) continue;
    if (f.startsWith("_")) continue; // skip _template.mdx.example etc.
    const filePath = join(dir, f);
    const stat = statSync(filePath);
    const slug = f.replace(/\.mdx$/, "");
    const raw = readFileSync(filePath, "utf-8");
    if (/^draft:\s*true/m.test(raw)) continue;
    files.push({ url: `https://${HOST}/blog/${slug}`, mtime: stat.mtimeMs });
  }
  files.sort((a, b) => b.mtime - a.mtime);
  return files.slice(0, limit).map((f) => f.url);
}

async function submit(urlList) {
  if (urlList.length === 0) {
    console.error("[indexnow] No URLs to submit.");
    process.exit(1);
  }
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const status = res.status;
  let detail = "";
  try {
    detail = await res.text();
  } catch {}
  if (status === 200 || status === 202) {
    console.log(
      `[indexnow] OK (${status}). Submitted ${urlList.length} URL${urlList.length === 1 ? "" : "s"}.`,
    );
  } else {
    console.error(`[indexnow] FAILED (${status}): ${detail}`);
    process.exit(1);
  }
  for (const u of urlList) console.log(`  ${u}`);
}

async function main() {
  const opts = parseArgs();
  let urls = opts.urls;

  if (opts.sitemap) {
    urls = await fetchSitemapUrls();
    console.log(`[indexnow] Loaded ${urls.length} URLs from sitemap.`);
  } else if (opts.recent) {
    urls = recentMdxUrls(opts.recent);
    console.log(`[indexnow] Loaded ${urls.length} most-recent MDX URLs.`);
  }

  // IndexNow caps at 10,000 URLs per request. Chunk at 5000 for safety.
  const CHUNK = 5000;
  for (let i = 0; i < urls.length; i += CHUNK) {
    await submit(urls.slice(i, i + CHUNK));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

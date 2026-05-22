#!/usr/bin/env node
/**
 * Generate a 1200x655 hero cover for a Great Marketing AI blog post.
 *
 * Brand style: brand-cream gradient (#FAF5EB -> #ffffff), brand-gold accent
 * (#C9A961), Fraunces-style display type, no external assets. Output is a
 * standalone SVG (no fonts embedded — system Fraunces fallback if installed,
 * otherwise serif).
 *
 * Usage
 *   node scripts/generate-blog-cover.mjs --slug <slug> --title "..." \
 *     [--eyebrow "..."] [--chip "..."] [--out path]
 *
 * Defaults:
 *   --eyebrow "GREAT MARKETING AI"
 *   --out    public/blog/<slug>-hero.svg
 *
 * Update the MDX frontmatter to point at the generated file, e.g.
 *   featuredImage: "/blog/<slug>-hero.svg"
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

// ---- Brand constants ------------------------------------------------------

const BG_START = "#FAF5EB"; // brand-cream
const BG_END = "#FFFFFF";
const ACCENT = "#C9A961"; // brand-gold
const ACCENT_DARK = "#B8965A"; // brand-gold-dark
const INK = "#171717";
const INK_MUTED = "#525252";
const INK_DIM = "#737373";
const DISPLAY_FONT =
  "'Fraunces',ui-serif,'Iowan Old Style','Apple Garamond','Baskerville','Times New Roman',serif";
const BODY_FONT =
  "'DM Sans',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif";

const WIDTH = 1200;
const HEIGHT = 655;

// ---- Helpers --------------------------------------------------------------

function escape(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function parseArgs(argv) {
  const args = { slug: "", title: "", eyebrow: "GREAT MARKETING AI", chip: "", out: "" };
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    const val = argv[i + 1];
    if (!flag.startsWith("--")) continue;
    const key = flag.slice(2);
    if (key in args && val !== undefined && !val.startsWith("--")) {
      args[key] = val;
      i++;
    }
  }
  return args;
}

/**
 * Wrap a title at ~28 chars/line, max 3 lines, ellipsizing the third line if needed.
 * Used at 64px Fraunces — wider lines feel cramped at this aspect ratio.
 */
function wrapTitle(title, charsPerLine = 28, maxLines = 3) {
  if (!title) return [""];
  const words = title.split(/\s+/);
  const lines = [];
  let current = "";
  for (const w of words) {
    const candidate = current ? `${current} ${w}` : w;
    if (candidate.length > charsPerLine && current) {
      lines.push(current);
      current = w;
      if (lines.length === maxLines - 1) {
        // Pack everything else into the final line; ellipsize if it's too long
        const rest = words.slice(words.indexOf(w)).join(" ");
        const finalLine = rest.length > charsPerLine ? `${rest.slice(0, charsPerLine - 1)}...` : rest;
        lines.push(finalLine);
        return lines;
      }
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// ---- Renderer -------------------------------------------------------------

function renderCover({ title, eyebrow, chip }) {
  const lines = wrapTitle(title);
  const titleY0 = 250 - (lines.length - 1) * 36; // center the block vertically
  const titleText = lines
    .map(
      (line, i) =>
        `    <tspan x="600" dy="${i === 0 ? 0 : 80}">${escape(line)}</tspan>`,
    )
    .join("\n");

  const chipWidth = chip ? Math.max(200, chip.length * 11 + 56) : 0;
  const chipX = chip ? (WIDTH - chipWidth) / 2 : 0;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BG_START}"/>
      <stop offset="100%" stop-color="${BG_END}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="-20%" r="60%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.20"/>
      <stop offset="70%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${WIDTH}" height="8" fill="${ACCENT}"/>

  <!-- Brand mark -->
  <g transform="translate(80, 80)">
    <rect width="56" height="56" rx="12" fill="${ACCENT}"/>
    <text x="28" y="38" text-anchor="middle" fill="${INK}" font-family="${DISPLAY_FONT}" font-size="28" font-weight="800" letter-spacing="-0.02em">GM</text>
  </g>
  <text x="160" y="118" fill="${INK_MUTED}" font-family="${BODY_FONT}" font-size="18" font-weight="600" letter-spacing="0.04em">${escape(eyebrow)}</text>

  <!-- Title -->
  <text x="600" y="${titleY0}" text-anchor="middle" fill="${INK}" font-family="${DISPLAY_FONT}" font-size="64" font-weight="700" letter-spacing="-0.02em">
${titleText}
  </text>

  ${chip ? `<!-- Chip -->
  <rect x="${chipX}" y="${titleY0 + lines.length * 80}" width="${chipWidth}" height="40" rx="20" fill="${ACCENT}" fill-opacity="0.15" stroke="${ACCENT}" stroke-width="1"/>
  <text x="600" y="${titleY0 + lines.length * 80 + 27}" text-anchor="middle" fill="${ACCENT_DARK}" font-family="${BODY_FONT}" font-size="16" font-weight="600">${escape(chip)}</text>` : ""}

  <!-- Footer domain -->
  <text x="600" y="600" text-anchor="middle" fill="${INK_DIM}" font-family="${BODY_FONT}" font-size="16" font-weight="500">greatmarketing.ai/blog</text>
</svg>
`;
}

// ---- CLI ------------------------------------------------------------------

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug || !args.title) {
    console.error("usage: generate-blog-cover.mjs --slug <slug> --title \"...\" [--eyebrow \"...\"] [--chip \"...\"] [--out path]");
    process.exit(1);
  }

  const outPath = args.out
    ? path.resolve(args.out)
    : path.join(REPO_ROOT, "public", "blog", `${args.slug}-hero.svg`);

  const svg = renderCover({ title: args.title, eyebrow: args.eyebrow, chip: args.chip });

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, svg, "utf-8");

  console.log(`wrote ${path.relative(REPO_ROOT, outPath)}`);
  console.log(`  -> update MDX frontmatter: featuredImage: "/blog/${args.slug}-hero.svg"`);
}

main();

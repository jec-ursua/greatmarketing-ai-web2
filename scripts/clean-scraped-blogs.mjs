#!/usr/bin/env node
/**
 * Cleans up Framer-scraped MDX blog files by removing nav/footer noise.
 *
 * Usage: node scripts/clean-scraped-blogs.mjs [--slug <slug>] [--all] [--dry-run]
 */

import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.resolve('content/blog');

const SLUGS_TO_CLEAN = [
  'how-to-choose-best-personal-injury-lawyers-los-angeles',
  'personal-injury-law-firm-marketing-property-damage',
  'personal-injury-lawyer-ads-spy-on-competitors',
  'biggest-law-firms-in-new-york',
  'google-ads-for-lawyers-ppc-law-firms',
  'how-hispanic-marketing-agencies-drive-exclusive-mva-leads',
  'marketing-ideas-for-law-firms',
  'facebook-ads-for-law-firms',
  'facebook-ads-that-convert-psychology-tricks',
  'marketing-agency-leads',
  'pay-per-lead-marketing-agency',
  'scaling-pay-per-lead-marketing-agency-2026',
  'escaping-retainer-treadmill-pay-per-lead-model',
  'lead-arbitrage-explained-turning-ad-clicks-into-profit',
  'how-to-choose-marketing-agency',
  'how-to-scale-a-marketing-agency-hormozi-scale-zero',
  'ogilvy-on-advertising-vs-ai-rules',
  'meta-ads-best-practices-2025-why-targeting-doesnt-matter-anymore',
  'meta-andromeda-explained-fix-failing-facebook-ads-2025',
  'breakthrough-leads-optimization-framework-how-to-train-meta-to-bring-you-buyers-not-browsers',
  'the-ultimate-guide-to-hook-rate-and-hold-rate-meta-ads',
  'why-most-lead-ads-on-facebook-fail-(and-how-to-fix-them-for-higher-quality-leads)',
];

// Markers for where footer noise starts
const FOOTER_MARKERS = [
  'Join Our Great Marketing Newsletter',
  '##### About the author',
  'About the Author',
  '©2026 Great Marketing AI',
  'Published:',
  '**Want this done for you?**',
  'Want this done for you?',
  'Author:',
];

// Markers for nav/promo noise to remove
const NAV_END_MARKERS = [
  '## Key Takeaways',
];

// Lines that are pure noise within the body
const NOISE_PATTERNS = [
  /^Get Spanish MVA Leads$/,
  /^Get Exclusive PI Leads$/,
  /^Hire Us$/,
  /^Services$/,
  /^Free Content$/,
  /^Contact Us:$/,
  /^\[?\(562\) 592-8281\]?\(?tel:/,
  /^Turn Ad Spend Into Signed Cases$/,
  /^## Turn Ad Spend Into Signed Cases$/,
  /^\[NEEDS-REVIEW\]/,
  /^<!-- Auto-scraped from/,
  /^Book a Consultation Call$/,
  /^!\[Rafael Hernandez\]/,
  /^CEO and Co-Founder of Great Marketing AI$/,
  /^\|$/,
];

function cleanBlog(slug, dryRun) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    console.log(`  ${slug}: file not found, skip`);
    return;
  }

  const raw = fs.readFileSync(filePath, 'utf8');

  // Split frontmatter from body
  const fmEnd = raw.indexOf('---', 4);
  if (fmEnd === -1) {
    console.log(`  ${slug}: no frontmatter end found, skip`);
    return;
  }
  const frontmatter = raw.slice(0, fmEnd + 3);
  const body = raw.slice(fmEnd + 3);

  const lines = body.split('\n');

  // Find where real content starts (after Key Takeaways section, or first real H2)
  let contentStart = -1;
  let keyTakeawaysStart = -1;
  let keyTakeawaysEnd = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '## Key Takeaways') {
      keyTakeawaysStart = i;
      // Find end of key takeaways (next empty line after the bullet list, or next H2)
      for (let j = i + 1; j < lines.length; j++) {
        const trimmed = lines[j].trim();
        if (trimmed.startsWith('## ') && trimmed !== '## Key Takeaways') {
          keyTakeawaysEnd = j;
          break;
        }
        // If we hit a paragraph (non-bullet, non-empty, non-heading), that's body text
        if (trimmed && !trimmed.startsWith('-') && !trimmed.startsWith('*') && !trimmed.startsWith('#')) {
          // Check if it's the start of the actual article body
          if (trimmed.length > 80) {
            contentStart = j;
            keyTakeawaysEnd = j;
            break;
          }
        }
      }
      break;
    }
  }

  // If no Key Takeaways, find first real H2 that's not noise
  if (contentStart === -1 && keyTakeawaysEnd !== -1) {
    contentStart = keyTakeawaysEnd;
  }
  if (contentStart === -1) {
    // Fallback: find first H2 that looks like real content
    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith('## ') &&
          trimmed !== '## Turn Ad Spend Into Signed Cases' &&
          trimmed !== '## Key Takeaways') {
        contentStart = i;
        break;
      }
    }
  }

  if (contentStart === -1) {
    console.log(`  ${slug}: could not find content start, skip`);
    return;
  }

  // Extract key takeaways for frontmatter
  let takeaways = [];
  if (keyTakeawaysStart !== -1) {
    const seen = new Set();
    for (let i = keyTakeawaysStart + 1; i < (keyTakeawaysEnd || lines.length); i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith('-   ') || trimmed.startsWith('- ')) {
        const text = trimmed.replace(/^-\s+/, '').trim();
        if (text && !seen.has(text)) {
          seen.add(text);
          takeaways.push(text);
        }
      }
    }
  }

  // Find where footer noise starts (search backwards from end for earliest footer marker)
  let contentEnd = lines.length;
  // First pass: find the earliest footer marker in the last 30% of the file
  const searchFrom = Math.max(contentStart, Math.floor(lines.length * 0.7));
  for (let i = searchFrom; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    for (const marker of FOOTER_MARKERS) {
      if (trimmed.includes(marker)) {
        contentEnd = Math.min(contentEnd, i);
      }
    }
  }

  // Extract body content
  let contentLines = lines.slice(contentStart, contentEnd);

  // Remove noise lines
  contentLines = contentLines.filter((line) => {
    const trimmed = line.trim();
    return !NOISE_PATTERNS.some((pat) => pat.test(trimmed));
  });

  // Remove nav-like link fragments: bare `[` or `](../...)` lines
  contentLines = contentLines.filter((line) => {
    const trimmed = line.trim();
    if (trimmed === '[' || trimmed === ']') return false;
    if (/^\]\(\.\.\//.test(trimmed)) return false;
    if (/^\[!\[.*\]\(https:\/\/framerusercontent\.com.*logo/i.test(trimmed)) return false;
    return true;
  });

  // Remove the services promo block if it appears in the body
  const promoPatterns = [
    /^\*\*Spanish MVA Leads\*\*/,
    /^\*\*Facebook & Instagram Ads\*\*/,
    /^\*\*Google Ads\*\*/,
    /^\*\*Website Design\*\*/,
    /^\*\*AI Automations\*\*/,
    /^\*\*Email Marketing\*\*/,
    /^\*\*SEO\*\*/,
    /get exclusive, high-intent cases from the untapped Hispanic market/,
    /reach customers where they scroll/,
    /capture people actively searching for you/,
    /turn visitors into buyers with high-converting sites/,
    /save hours and never miss a follow-up/,
    /nurture leads and close sales on autopilot/,
    /get found by customers searching for what you sell/,
    /We blend AI-driven testing with proven performance strategy/,
  ];
  contentLines = contentLines.filter((line) => {
    const trimmed = line.trim();
    return !promoPatterns.some((pat) => pat.test(trimmed));
  });

  // Remove duplicated content blocks (Framer sometimes renders content twice)
  // Strategy: split into paragraphs, remove any paragraph that appeared earlier
  const seen = new Set();
  const deduped = [];
  let currentBlock = [];
  for (const line of contentLines) {
    if (line.trim() === '') {
      if (currentBlock.length > 0) {
        const blockText = currentBlock.join('\n').trim();
        if (blockText.length > 40 && seen.has(blockText)) {
          // Skip duplicate block
        } else {
          if (blockText.length > 40) seen.add(blockText);
          deduped.push(...currentBlock);
        }
        currentBlock = [];
      }
      deduped.push(line);
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) {
    const blockText = currentBlock.join('\n').trim();
    if (blockText.length > 40 && seen.has(blockText)) {
      // Skip duplicate block
    } else {
      deduped.push(...currentBlock);
    }
  }
  contentLines = deduped;

  // Collapse 3+ consecutive blank lines into 2
  const collapsed = [];
  let blankCount = 0;
  for (const line of contentLines) {
    if (line.trim() === '') {
      blankCount++;
      if (blankCount <= 2) collapsed.push(line);
    } else {
      blankCount = 0;
      collapsed.push(line);
    }
  }

  // Remove leading/trailing blank lines from content
  while (collapsed.length && collapsed[0].trim() === '') collapsed.shift();
  while (collapsed.length && collapsed[collapsed.length - 1].trim() === '') collapsed.pop();

  // Rebuild frontmatter with keyTakeaways if found
  let newFrontmatter = frontmatter;
  if (takeaways.length > 0 && !frontmatter.includes('keyTakeaways:')) {
    const yamlTakeaways = takeaways.map((t) => `  - "${t.replace(/"/g, '\\"')}"`).join('\n');
    newFrontmatter = frontmatter.replace(
      /^draft: true$/m,
      `keyTakeaways:\n${yamlTakeaways}\ndraft: true`,
    );
  }

  const result = newFrontmatter + '\n\n' + collapsed.join('\n') + '\n';

  if (dryRun) {
    const originalLines = raw.split('\n').length;
    const cleanedLines = result.split('\n').length;
    console.log(`  ${slug}: ${originalLines} → ${cleanedLines} lines (${originalLines - cleanedLines} removed), ${takeaways.length} takeaways`);
  } else {
    fs.writeFileSync(filePath, result, 'utf8');
    const originalLines = raw.split('\n').length;
    const cleanedLines = result.split('\n').length;
    console.log(`  ${slug}: cleaned (${originalLines} → ${cleanedLines} lines, ${takeaways.length} takeaways)`);
  }
}

// Parse CLI args
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const allFlag = args.includes('--all');
const slugIdx = args.indexOf('--slug');
const slug = slugIdx !== -1 ? args[slugIdx + 1] : null;

if (slug) {
  cleanBlog(slug, dryRun);
} else if (allFlag) {
  console.log(`[clean] Processing ${SLUGS_TO_CLEAN.length} blogs${dryRun ? ' (dry run)' : ''}...`);
  for (const s of SLUGS_TO_CLEAN) {
    cleanBlog(s, dryRun);
  }
} else {
  console.log('Usage: node scripts/clean-scraped-blogs.mjs --all [--dry-run]');
  console.log('       node scripts/clean-scraped-blogs.mjs --slug <slug> [--dry-run]');
}

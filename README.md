# Great Marketing AI — Web (v2.1)

Next.js 15 website with reusable blog template + dynamic MDX content.

## What's new in v2.1

- ✅ **Reusable blog template** — one file handles all `/blog/[slug]` URLs
- ✅ **MDX content workflow** — add new blogs by uploading `.mdx` files only (no code changes)
- ✅ **Auto-calculated reading time** from content length
- ✅ **Per-blog SEO** — title, description, OG, JSON-LD Article schema all dynamic
- ✅ **Optional Key Takeaways + FAQs** as structured frontmatter
- ✅ **Auto-generated sitemap** includes all blog posts
- ✅ **Category filters + Load More** pagination on /blog list page

## Adding a New Blog Post (No Code Needed)

1. Copy `content/blog/_template.mdx.example`
2. Rename to your blog slug (e.g., `5-meta-ads-tips.mdx`)
3. Fill out frontmatter (title, description, image, category, etc.)
4. Write content in Markdown below
5. Upload to GitHub at `content/blog/your-slug.mdx`
6. Vercel auto-deploys → live at `greatmarketing.ai/blog/your-slug`

That's it. No JavaScript. No code changes. Just markdown.

## Project Structure

```
app/
├── blog/
│   ├── page.tsx          ← Blog list page (/blog)
│   └── [slug]/
│       └── page.tsx      ← Template for ALL individual blog posts
└── ...
content/blog/
├── _template.mdx.example ← Copy this for new posts
└── *.mdx                 ← Your actual blog content
components/blog/          ← Reusable blog UI components
lib/blog.ts               ← Reads MDX files, parses frontmatter
```

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables (Vercel)

| Variable | Source |
|----------|--------|
| `RESEND_API_KEY` | https://resend.com/api-keys |
| `LEAD_NOTIFICATION_EMAIL` | rafael@greatmarketing.ai |
| `SLACK_LEAD_WEBHOOK_URL` | https://api.slack.com/messaging/webhooks |
| `NEXT_PUBLIC_SITE_URL` | https://greatmarketing.ai |

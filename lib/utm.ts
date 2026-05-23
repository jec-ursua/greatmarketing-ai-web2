/**
 * UTM-tagged link builders for greatmarketing.ai.
 *
 * Convention: utm_source=greatmarketing, utm_campaign=<campaign>,
 * utm_medium=<surface>, utm_content=<blog-slug-or-page>. Mediums name the
 * SURFACE that triggered the click (blog-sidebar, blog-popup, blog-inline,
 * footer, etc.) so attribution stays stable across pages.
 *
 * mdx-components.tsx auto-rewrites internal MDX anchors to /contact,
 * /book-a-call, and /services/* with utm_medium="blog-inline" +
 * utm_content=<slug>. Authors keep writing the bare path in MDX.
 *
 * Code-driven surfaces (sidebar CTA, exit-intent popup, footer) tag at the
 * call site using contactUrl/bookACallUrl/servicesUrl below.
 */

const CAMPAIGN = "pi-leads";

export type UtmMedium =
  | "blog-sidebar"
  | "blog-popup"
  | "blog-inline"
  | "footer"
  | "homepage";

function withUtm(
  base: string,
  campaign: string,
  opts: { medium: UtmMedium; content?: string },
): string {
  const params = new URLSearchParams({
    utm_source: "greatmarketing",
    utm_medium: opts.medium,
    utm_campaign: campaign,
  });
  if (opts.content) params.set("utm_content", opts.content);
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}${params.toString()}`;
}

export function contactUrl(opts: { medium: UtmMedium; content?: string }): string {
  return withUtm("/contact", CAMPAIGN, opts);
}

export function bookACallUrl(opts: { medium: UtmMedium; content?: string }): string {
  return withUtm("/book-a-call", CAMPAIGN, opts);
}

export function servicesUrl(
  path: string,
  opts: { medium: UtmMedium; content?: string },
): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return withUtm(normalized, CAMPAIGN, opts);
}

/** True for an MDX anchor that should be rewritten to a tagged /contact link. */
export function isContactHref(href: string | undefined): boolean {
  if (!href) return false;
  if (href.includes("utm_source=")) return false;
  return /^\/contact(\/|$|\?|#)/.test(href);
}

/** True for an MDX anchor that should be rewritten to a tagged /book-a-call link. */
export function isBookACallHref(href: string | undefined): boolean {
  if (!href) return false;
  if (href.includes("utm_source=")) return false;
  return /^\/book-a-call(\/|$|\?|#)/.test(href);
}

/** True for an MDX anchor that should be rewritten to a tagged /services/* link. */
export function isServicesHref(href: string | undefined): boolean {
  if (!href) return false;
  if (href.includes("utm_source=")) return false;
  return /^\/services\//.test(href);
}

import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, Brain } from "lucide-react";

export function AboutSection({ slug }: { slug?: string }) {
  const ctaContent = slug ? `&utm_content=${encodeURIComponent(slug)}` : "";
  const contactHref = `/contact?utm_source=greatmarketing&utm_medium=blog-inline&utm_campaign=mva-leads${ctaContent}`;
  const bookHref = `/book-a-call?utm_source=greatmarketing&utm_medium=blog-inline&utm_campaign=mva-leads${ctaContent}`;

  return (
    <section className="mt-12 border-t border-neutral-200 pt-10">
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        About Great Marketing AI
      </h2>

      <div className="rounded-2xl border-l-4 border-brand-gold bg-brand-cream/40 p-6">
        <div className="mb-4">
          <p className="font-semibold text-neutral-900">
            Great Marketing AI:{" "}
            <span className="font-normal text-neutral-700">
              Performance marketing for personal injury law firms
            </span>
          </p>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-neutral-700">
          We help personal injury law firms scale with exclusive, AI-qualified
          motor vehicle accident leads. Native English and Spanish campaigns,
          enterprise-grade Meta + Google ad management, and AI lead
          qualification before every intake. Built on frameworks from NP
          Digital and Driven Academy.
        </p>

        <div className="mb-6 space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                100% Exclusive Leads
              </p>
              <p className="text-xs text-neutral-600">
                Never shared between firms. Territory-protected.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Native Spanish &amp; English Campaigns
              </p>
              <p className="text-xs text-neutral-600">
                Built by native speakers, not Google Translate.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Brain className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                AI Lead Qualification
              </p>
              <p className="text-xs text-neutral-600">
                Pre-qualified before they ever reach your intake team.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Link
            href={bookHref}
            className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-neutral-900 transition hover:bg-brand-gold-dark"
          >
            Book a Strategy Call
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={contactHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

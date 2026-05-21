import Link from 'next/link';

const SERVICES = [
  { name: 'MVA Leads', href: '/services/motor-vehicle-accident-leads' },
  { name: 'Facebook Ads', href: '/services/facebook-advertising-agency' },
  { name: 'Google Ads', href: '/' },
  { name: 'SEO', href: '/services/seo-agency-los-angeles' },
  { name: 'Web Design', href: '/services/web-design-los-angeles' },
  { name: 'Email Marketing', href: '/services/email-marketing' },
  { name: 'AI Automation', href: '/services/ai-automation' },
];

const FREE_CONTENT = [
  { name: 'Marketing Blog', href: '/blog' },
  { name: 'YouTube Tutorials', href: 'https://www.youtube.com/@GreatMarketingAI' },
  { name: 'Weekly Newsletter', href: '/newsletter' },
];

const COMPANY = [
  { name: 'About Our Agency', href: '/about' },
  { name: 'Careers', href: '/career' },
  { name: 'Client Success Stories', href: '/calendars/success' },
];

const INFORMATION = [
  { name: 'FAQ', href: '/#faq-1' },
  { name: 'Legal', href: '/legal' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms-condition' },
];

const SOCIAL = [
  { name: 'YT', href: 'https://www.youtube.com/@GreatMarketingAI' },
  { name: 'IG', href: 'https://www.instagram.com/greatmarketing.ai/' },
  { name: 'FB', href: 'https://www.facebook.com/profile.php?id=61567697654548' },
  { name: 'SP', href: 'https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75' },
  { name: 'IN', href: 'https://www.linkedin.com/company/greatmarketingai/' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-gold">
                <span className="font-display font-bold text-neutral-900 text-lg">G</span>
              </div>
              <p className="font-display font-bold text-white">GREAT MARKETING AI</p>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Join Our Newsletter</h3>
            <p className="text-sm mb-5 max-w-md">
              Join 1,358 others reading our weekly newsletter for the latest marketing insights and growth hacks.
            </p>
            <form className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-brand-gold text-neutral-900 rounded-full text-sm font-bold hover:brightness-105 transition"
              >
                Get Notified
              </button>
            </form>
            <div className="flex gap-3 mt-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-xs font-bold hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition"
                  aria-label={s.name}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="hover:text-white transition">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Free Content</h4>
            <ul className="space-y-2.5 text-sm">
              {FREE_CONTENT.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="hover:text-white transition">{s.name}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-4 mt-7">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {COMPANY.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="hover:text-white transition">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Information</h4>
            <ul className="space-y-2.5 text-sm">
              {INFORMATION.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="hover:text-white transition">{s.name}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-4 mt-7">Contact</h4>
            <a href="tel:+15625928281" className="text-sm font-semibold text-brand-gold hover:underline">
              (562) 592-8281
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500 pt-8">
          ©2026 Great Marketing AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

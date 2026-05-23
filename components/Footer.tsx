import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';
import { contactUrl } from '@/lib/utm';

const SERVICES = [
  { name: 'Pay Per Lead', href: '/services/pay-per-lead' },
  { name: 'Facebook & Google Ads', href: '/services/facebook-advertising-agency' },
  { name: 'SEO', href: '/services/seo-agency-los-angeles' },
  { name: 'Web Design', href: '/services/web-design-los-angeles' },
  { name: 'AI Automation', href: '/services/ai-automation' },
];

const FREE_CONTENT = [
  { name: 'Marketing Blog', href: '/blog' },
  { name: 'YouTube Tutorials', href: 'https://www.youtube.com/@GreatMarketingAI', external: true },
  { name: 'Weekly Newsletter', href: '/blog' },
];

const WHO_WE_HELP = [
  { name: 'Personal Injury', href: '/industries/personal-injury' },
  { name: 'Family Law', href: '/industries/family-law' },
  { name: 'Criminal Defense', href: '/industries/criminal-defense' },
  { name: 'Immigration', href: '/industries/immigration' },
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
  { name: 'Terms & Condition', href: '/terms-condition' },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-neutral-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          <div className="lg:col-span-2">
            <Image
              src="https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png"
              alt="Great Marketing AI Logo - advertising agency los angeles"
              width={140}
              height={51}
              className="h-12 w-auto mb-5"
            />
            <h3 className="font-display text-2xl font-bold text-white mb-3">Join Our Great Marketing Newsletter</h3>
            <p className="text-sm mb-5 max-w-md">Join 1,358 others reading our weekly newsletter for the latest marketing insights and growth hacks</p>
            <form className="flex gap-2 max-w-md">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-brand-gold transition" required />
              <button type="submit" className="px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 rounded-full text-sm font-bold transition whitespace-nowrap">Get Notified</button>
            </form>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.youtube.com/@GreatMarketingAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
                  <Youtube size={16} />
                </a>
                <a href="https://www.instagram.com/greatmarketing.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
                  <Instagram size={16} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61567697654548" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
                  <Facebook size={16} />
                </a>
                <a href="https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.78-.179-.9-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/greatmarketingai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.name}><Link href={s.href} className="hover:text-white transition">{s.name}</Link></li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-4 mt-7">Who We Help</h4>
            <ul className="space-y-2.5 text-sm">
              {WHO_WE_HELP.map((s) => (
                <li key={s.name}><Link href={s.href} className="hover:text-white transition">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Free Content</h4>
            <ul className="space-y-2.5 text-sm">
              {FREE_CONTENT.map((s) => s.external ? (
                <li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{s.name}</a></li>
              ) : (
                <li key={s.name}><Link href={s.href} className="hover:text-white transition">{s.name}</Link></li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-4 mt-7">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {COMPANY.map((s) => (
                <li key={s.name}><Link href={s.href} className="hover:text-white transition">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Information</h4>
            <ul className="space-y-2.5 text-sm">
              {INFORMATION.map((s) => (
                <li key={s.name}><Link href={s.href} className="hover:text-white transition">{s.name}</Link></li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-4 mt-7">Contact Us</h4>
            <a href="tel:+15625928281" className="text-sm font-bold text-brand-gold hover:text-brand-gold-light transition block mb-2">(562) 592-8281</a>
            <Link href={contactUrl({ medium: 'footer' })} className="text-sm text-neutral-300 hover:text-white transition">Get in Touch</Link>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500 pt-8">©2026 Great Marketing AI. All rights reserved.</p>
        <p className="text-center text-xs text-neutral-600 mt-2">8605 Santa Monica Blvd #779486, West Hollywood, California 90069 US</p>
      </div>
    </footer>
  );
}

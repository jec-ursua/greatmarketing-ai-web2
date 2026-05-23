'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { HireUsButton } from './HireUsModal';

const SERVICES = [
  { name: 'PI Lead Generation', href: '/services/motor-vehicle-accident-leads' },
  { name: 'MVA Leads', href: '/services/motor-vehicle-accident-leads' },
  { name: 'Facebook Ads', href: '/services/facebook-advertising-agency' },
  { name: 'SEO', href: '/services/seo-agency-los-angeles' },
  { name: 'Web Design', href: '/services/web-design-los-angeles' },
  { name: 'AI Automation', href: '/services/ai-automation' },
];

const FREE_CONTENT = [
  { name: 'Blog', href: '/blog' },
  { name: 'YouTube', href: 'https://www.youtube.com/@GreatMarketingAI', external: true },
  { name: 'Newsletter', href: '/newsletter' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);

  // Smart hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="Great Marketing AI home">
          <Image
            src="https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png"
            alt="Great Marketing AI logo - advertising agency in los angeles"
            width={130}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-neutral-700">
          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="hover:text-neutral-900 transition flex items-center gap-1 py-2">
              Services <ChevronDown size={14} className={servicesOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white shadow-xl border border-neutral-100 rounded-xl py-2 min-w-[220px] animate-fade-in">
                  {SERVICES.map((s) => (
                    <Link key={s.name} href={s.href} className="block px-4 py-2.5 hover:bg-brand-cream hover:text-brand-gold transition text-sm">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="hover:text-neutral-900 transition">Case Studies</Link>
          <Link href="/career" className="hover:text-neutral-900 transition">Career</Link>

          {/* Free Content dropdown */}
          <div className="relative" onMouseEnter={() => setContentOpen(true)} onMouseLeave={() => setContentOpen(false)}>
            <button className="hover:text-neutral-900 transition flex items-center gap-1 py-2">
              Free Content <ChevronDown size={14} className={contentOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            {contentOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white shadow-xl border border-neutral-100 rounded-xl py-2 min-w-[180px] animate-fade-in">
                  {FREE_CONTENT.map((s) => s.external ? (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 hover:bg-brand-cream hover:text-brand-gold transition text-sm">{s.name}</a>
                  ) : (
                    <Link key={s.name} href={s.href} className="block px-4 py-2.5 hover:bg-brand-cream hover:text-brand-gold transition text-sm">{s.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-neutral-900 transition">About Us</Link>

          <span className="text-neutral-700">Contact Us: <a href="tel:+15625928281" className="font-bold text-brand-gold hover:text-brand-gold-dark transition">(562) 592-8281</a></span>
        </div>

        <HireUsButton className="hidden xl:inline-flex px-6 py-2.5 rounded-full bg-brand-gold text-neutral-900 text-sm font-bold hover:bg-brand-gold-dark transition">
          Hire Us
        </HireUsButton>

        <button className="xl:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-neutral-100 bg-white px-6 py-4 space-y-3 text-sm max-h-[calc(100vh-80px)] overflow-y-auto">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">Services <ChevronDown size={16} className="group-open:rotate-180 transition" /></summary>
            <div className="pl-4 mt-1 space-y-2">
              {SERVICES.map((s) => <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-neutral-600">{s.name}</Link>)}
            </div>
          </details>
          <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block py-2 font-medium">Case Studies</Link>
          <Link href="/career" onClick={() => setMobileOpen(false)} className="block py-2 font-medium">Career</Link>
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">Free Content <ChevronDown size={16} className="group-open:rotate-180 transition" /></summary>
            <div className="pl-4 mt-1 space-y-2">
              {FREE_CONTENT.map((s) => s.external ? (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block py-1.5 text-neutral-600">{s.name}</a>
              ) : (
                <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-neutral-600">{s.name}</Link>
              ))}
            </div>
          </details>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 font-medium">About Us</Link>
          <a href="tel:+15625928281" className="block py-2 font-semibold text-brand-gold">Contact Us: (562) 592-8281</a>
          <HireUsButton className="block w-full text-center mt-3 px-5 py-3 rounded-full bg-brand-gold text-neutral-900 font-bold">Hire Us</HireUsButton>
        </div>
      )}
    </nav>
  );
}

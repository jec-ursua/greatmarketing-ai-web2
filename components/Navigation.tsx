'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Great Marketing AI home">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-gold">
            <span className="font-display font-bold text-white text-lg">G</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-wide">GREAT</span>
            <span className="text-[10px] tracking-[0.2em] text-neutral-500">MARKETING.AI</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
          <button className="hover:text-neutral-900 transition flex items-center gap-1">
            Services <ChevronDown size={14} />
          </button>
          <Link href="/case-studies" className="hover:text-neutral-900 transition">Case Studies</Link>
          <Link href="/career" className="hover:text-neutral-900 transition">Career</Link>
          <button className="hover:text-neutral-900 transition flex items-center gap-1">
            Free Content <ChevronDown size={14} />
          </button>
          <Link href="/about" className="hover:text-neutral-900 transition">About Us</Link>
          <a href="tel:+15625928281" className="hover:text-neutral-900 transition">
            Contact Us: <span className="font-semibold">(562) 592-8281</span>
          </a>
        </div>

        <Link
          href="#hero-form"
          className="hidden lg:inline-flex px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:opacity-90 transition"
        >
          Hire Us
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white px-6 py-4 space-y-3 text-sm">
          <Link href="/case-studies" className="block">Case Studies</Link>
          <Link href="/career" className="block">Career</Link>
          <Link href="/about" className="block">About Us</Link>
          <a href="tel:+15625928281" className="block font-semibold text-brand-gold">(562) 592-8281</a>
          <Link href="#hero-form" className="block w-full text-center mt-3 px-5 py-2.5 rounded-full bg-neutral-900 text-white">
            Hire Us
          </Link>
        </div>
      )}
    </nav>
  );
}

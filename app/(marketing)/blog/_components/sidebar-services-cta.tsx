'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '@/components/HireUsModal';

const PRIMARY_SERVICE = 'Pay Per Lead';
const SECONDARY_SERVICES = [
  'Meta Ads',
  'Google Ads',
  'Website Design',
  'CRO',
  'Email Marketing',
  'SEO',
];

export function SidebarServicesCTA({ slug }: { slug?: string }) {
  const { openModal } = useModal();
  const [selected, setSelected] = useState<Set<string>>(new Set([PRIMARY_SERVICE]));

  const toggle = (service: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(service)) next.delete(service);
      else next.add(service);
      return next;
    });
  };

  const handleClick = () => {
    openModal({
      services: Array.from(selected),
      sourceSlug: slug,
      sourceSurface: 'blog-sidebar',
    });
  };

  return (
    <div className="rounded-2xl bg-brand-cream/60 p-5">
      <h3 className="mb-4 font-display text-xl">
        <span className="font-bold text-brand-gold-dark">How Can We Help</span>{' '}
        <span className="italic text-neutral-900">You?</span>
      </h3>

      <div className="space-y-2">
        <ServiceTile label={PRIMARY_SERVICE} checked={selected.has(PRIMARY_SERVICE)} onToggle={toggle} primary />
        <div className="grid grid-cols-2 gap-2">
          {SECONDARY_SERVICES.map((s) => (
            <ServiceTile key={s} label={s} checked={selected.has(s)} onToggle={toggle} />
          ))}
        </div>
      </div>

      <button
        onClick={handleClick}
        className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-gold px-4 py-2.5 text-sm font-bold text-neutral-900 transition hover:bg-brand-gold-dark"
      >
        Get Pay Per Lead Pricing
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function ServiceTile({
  label,
  checked,
  onToggle,
  primary = false,
}: {
  label: string;
  checked: boolean;
  onToggle: (service: string) => void;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(label)}
      className={`flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2.5 text-left text-xs font-semibold transition ${
        checked
          ? 'border-brand-gold text-brand-gold-dark'
          : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
      } ${primary ? 'text-sm' : ''}`}
    >
      <span>{label}</span>
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
          checked ? 'border-brand-gold bg-brand-gold' : 'border-neutral-300 bg-white'
        }`}
      >
        {checked && (
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-white">
            <path fill="currentColor" d="M6.3 11.3l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4z" />
          </svg>
        )}
      </span>
    </button>
  );
}

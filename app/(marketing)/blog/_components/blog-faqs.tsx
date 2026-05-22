'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function BlogFAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-12">
      <h2 className="font-display text-3xl font-bold mb-6">FAQs</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-50 transition"
            >
              <span className="font-display font-bold text-base lg:text-lg">{faq.q}</span>
              <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition ${openIdx === i ? 'bg-brand-gold rotate-180' : 'bg-neutral-100'}`}>
                <ChevronDown size={14} />
              </div>
            </button>
            {openIdx === i && (
              <div className="px-6 pb-5 text-neutral-700 leading-relaxed text-sm">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

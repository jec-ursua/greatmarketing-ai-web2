import { Check } from 'lucide-react';

export function KeyTakeaways({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="bg-brand-cream rounded-2xl p-8 my-10 border border-brand-gold/20">
      <h2 className="font-display text-2xl font-bold mb-6 mt-0">Key Takeaways</h2>
      <ul className="space-y-4 mb-0">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check size={14} className="text-neutral-900" strokeWidth={3} />
            </div>
            <span className="text-neutral-800 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CLIENTS } from '../_data/clients';

export function SidebarClients() {
  return (
    <div className="rounded-2xl bg-brand-cream/60 p-5">
      <h3 className="mb-1 font-display text-xl">
        <span className="font-bold text-brand-gold-dark">Our</span>{' '}
        <span className="italic text-neutral-900">Clients</span>
      </h3>
      <p className="mb-4 text-xs text-neutral-600">
        Trusted by 100+ happy customers worldwide
      </p>

      <div className="grid grid-cols-3 gap-2">
        {CLIENTS.map((client) => (
          <div
            key={client.name}
            className="flex h-12 items-center justify-center rounded-md bg-white px-1.5 text-center"
            title={client.name}
          >
            {client.logoPath ? (
              <Image
                src={client.logoPath}
                alt={client.name}
                width={64}
                height={28}
                className="max-h-7 w-auto object-contain opacity-70"
              />
            ) : (
              <span className="line-clamp-2 text-[9px] font-bold uppercase tracking-tight text-neutral-500">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-gold-dark transition hover:text-brand-gold"
      >
        Learn more about Great Marketing AI
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

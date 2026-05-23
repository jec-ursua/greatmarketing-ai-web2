import Image from 'next/image';
import { Youtube, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';
import { AUTHOR } from '@/lib/blog';

export function AuthorBio() {
  return (
    <div className="bg-brand-cream rounded-2xl p-8 my-12">
      <div className="flex items-start gap-6 mb-6">
        <Image
          src={AUTHOR.photo}
          alt={AUTHOR.name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full flex-shrink-0"
        />
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-gold font-bold mb-1">About the author</p>
          <h3 className="font-display text-2xl font-bold mb-1">{AUTHOR.name}</h3>
          <p className="text-sm text-neutral-500">{AUTHOR.role}</p>
        </div>
      </div>
      <p className="text-neutral-700 leading-relaxed mb-6">{AUTHOR.bio}</p>

      <div className="flex flex-wrap gap-4 items-center justify-between">
        <HireUsButton className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-sm transition">
          Get Exclusive PI Leads <ArrowRight size={14} />
        </HireUsButton>

        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-500 font-medium">Follow:</span>
          <a href={AUTHOR.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
            <Youtube size={14} />
          </a>
          <a href={AUTHOR.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
            <Instagram size={14} />
          </a>
          <a href={AUTHOR.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
            <Facebook size={14} />
          </a>
          <a href={AUTHOR.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-brand-gold hover:text-neutral-900 hover:border-transparent transition">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogSummary } from '@/lib/blog';

export function BlogCard({ post }: { post: BlogSummary }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition">
      <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-brand-gold text-neutral-900 text-xs font-bold rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl leading-snug mb-2 group-hover:text-brand-gold transition">{post.title}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2 mb-4">{post.description}</p>
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>{post.readingTime}</span>
          <ArrowRight size={16} className="text-brand-gold group-hover:translate-x-1 transition" />
        </div>
      </div>
    </Link>
  );
}

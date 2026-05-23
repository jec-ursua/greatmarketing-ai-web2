'use client';

import { useState } from 'react';
import { BlogCard } from './blog-card';
import { BLOG_CATEGORIES, type BlogSummary } from '@/lib/blog-categories';

export function BlogListClient({ posts }: { posts: BlogSummary[] }) {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const filtered = filter === 'All' ? posts : posts.filter((p) => p.category === filter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setVisibleCount(8); }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              filter === cat ? 'bg-brand-gold text-neutral-900' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-neutral-500 py-12">No posts in this category yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visible.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount(visibleCount + 8)}
            className="px-10 py-5 rounded-full bg-brand-dark text-white font-bold text-lg hover:opacity-90 transition"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

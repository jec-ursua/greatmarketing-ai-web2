import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/lib/blog";
import type { BlogSummary } from "@/lib/blog-categories";

function toSummary(p: BlogPost): BlogSummary {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    publishedDate: p.publishedDate,
    featuredImage: p.featuredImage,
    featuredImageAlt: p.featuredImageAlt,
    readingTime: p.readingTime,
  };
}

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16 border-t border-neutral-200 pt-12 pb-16">
      <h2 className="mb-6 font-display text-2xl font-bold text-neutral-900">
        Related Articles
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={toSummary(post)} />
        ))}
      </div>
    </section>
  );
}

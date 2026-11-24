import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-serif text-3xl font-semibold">Blog</h1>
      <div className="mt-6 space-y-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-lg border border-edge border-l-[3px] border-l-copper bg-white p-5 hover:shadow-sm">
            <h2 className="font-serif text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

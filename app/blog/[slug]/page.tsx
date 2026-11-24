import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function Post({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/blog" className="text-sm text-muted hover:text-ink">&larr; All articles</Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight">{post.title}</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-muted">
        {post.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </article>
  );
}

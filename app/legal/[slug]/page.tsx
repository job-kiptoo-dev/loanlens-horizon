import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const pages: Record<string, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  editorial: "Editorial Policy",
  contact: "Contact",
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = pages[(await params).slug];
  return title ? { title } : {};
}

export default async function Legal({ params }: Props) {
  const title = pages[(await params).slug];
  if (!title) notFound();

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/search" className="text-sm text-muted hover:text-ink">&larr; Back</Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold">{title}</h1>
      <p className="mt-4 rounded-md border border-copper/40 bg-copper/10 px-4 py-3 text-sm text-copper-dark">
        Placeholder page. Replace this text with your own {title.toLowerCase()} before you publish.
      </p>
    </div>
  );
}

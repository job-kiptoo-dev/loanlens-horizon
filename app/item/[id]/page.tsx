import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLoan, loans } from "@/data/loans";
import { CategoryTag, LoanCard } from "@/components/LoanCard";
import { amountLabel, aprLabel, categoryLabel, formatDate, termLabel } from "@/lib/format";
import { guidance } from "@/lib/copy";
import { posts } from "@/lib/posts";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return loans.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loan = getLoan((await params).id);
  return loan ? { title: loan.name, description: loan.summary } : {};
}

function Cta({ id, host, label }: { id: string; host: string; label: string }) {
  return (
    <>
      <a
        href={`/go?item_id=${id}`}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-block rounded-md bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
      >
        {label} &rarr;
      </a>
      <p className="mt-3 text-xs text-white/70">
        No obligation to apply. You will be taken to <strong className="text-white">{host}</strong>.
      </p>
    </>
  );
}

export default async function LoanPage({ params }: Props) {
  const loan = getLoan((await params).id);
  if (!loan) notFound();

  const g = guidance(loan);
  const similar = loans.filter((l) => l.category === loan.category && l.id !== loan.id).slice(0, 3);
  const host = new URL(loan.applyUrl).hostname.replace(/^www\./, "");

  return (
    <div className="mx-auto max-w-3xl px-5 pb-6 pt-8">
      <Link href="/search" className="text-sm text-muted hover:text-ink">&larr; Back</Link>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <CategoryTag category={loan.category} />
        <span className="text-xs text-muted">{loan.lender}</span>
        {loan.verified && (
          <span className="rounded-full bg-copper/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-copper-dark">Reviewed</span>
        )}
      </div>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{loan.name}</h1>
      <p className="mt-2 text-sm text-muted">
        Last checked on {formatDate(loan.lastChecked)}. We may earn a commission when you click through.
      </p>

      {!loan.verified && (
        <p role="note" className="mt-4 rounded-md border border-copper/40 bg-copper/10 px-4 py-3 text-sm text-copper-dark">
          Sample data. Confirm the current rate, limits and terms with the lender before you rely on them.
        </p>
      )}

      <section aria-label="Key details" className="mt-6 rounded-xl bg-navy p-6 text-white">
        <dl className="grid grid-cols-2 gap-5 border-b border-white/15 pb-5 sm:grid-cols-4">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-copper">APR range</dt>
            <dd className="mt-1 font-serif text-2xl font-semibold">{aprLabel(loan)}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-copper">Amount</dt>
            <dd className="mt-1 text-sm font-semibold">{amountLabel(loan)}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-copper">Term</dt>
            <dd className="mt-1 text-sm font-semibold">{termLabel(loan)}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-copper">Type</dt>
            <dd className="mt-1 text-sm font-semibold">{categoryLabel[loan.category]}</dd>
          </div>
        </dl>
        <div className="pt-5"><Cta id={loan.id} host={host} label="Check eligibility" /></div>
      </section>

      <section className="mt-6 rounded-lg border border-edge border-l-[3px] border-l-copper bg-white p-5">
        <h2 className="font-serif text-xl font-semibold">Our verdict</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{g.verdict}</p>
      </section>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <section className="rounded-lg border border-edge bg-white p-5">
          <h2 className="font-serif text-base font-semibold text-good">Best for</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{g.bestFor}</p>
        </section>
        <section className="rounded-lg border border-edge bg-white p-5">
          <h2 className="font-serif text-base font-semibold text-copper-dark">Watch out</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{g.watchOut}</p>
        </section>
      </div>

      <section className="mt-4 rounded-lg border border-edge border-l-[3px] border-l-navy bg-white p-5">
        <h2 className="font-serif text-xl font-semibold">Full review</h2>
        <div className="mt-3 max-w-prose space-y-4 text-sm leading-7 text-muted">
          {g.analysis.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="mt-4 rounded-lg border border-edge bg-white p-5">
        <h2 className="font-serif text-base font-semibold">Requirements</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {loan.requirements.map((r) => (
            <li key={r} className="flex items-center gap-2"><span className="text-copper" aria-hidden="true">&#10003;</span>{r}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-xl bg-navy p-6 text-center text-white">
        <h2 className="mb-3 text-sm">Check if you qualify</h2>
        <Cta id={loan.id} host={host} label="Check eligibility" />
      </section>

      <p className="mt-8 text-xs text-muted">
        Rates shown are representative. Your actual rate may differ based on your circumstances.
      </p>

      {similar.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold">Similar options</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {similar.map((l) => <LoanCard key={l.id} loan={l} />)}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="font-serif text-xl font-semibold">Related articles</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border border-edge bg-white p-5 hover:border-copper/60">
              <h3 className="font-serif font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

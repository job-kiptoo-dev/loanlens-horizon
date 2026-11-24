import Link from "next/link";
import type { Loan } from "@/data/loans";
import { amountLabel, aprLabel, categoryLabel, termLabel } from "@/lib/format";
import { guidance } from "@/lib/copy";

export function CategoryTag({ category }: { category: Loan["category"] }) {
  return (
    <span className="inline-block rounded-full bg-tag-bg px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-tag-fg">
      {categoryLabel[category]}
    </span>
  );
}

export function LoanCard({ loan }: { loan: Loan }) {
  return (
    <article className="flex flex-col rounded-lg border border-edge border-l-[3px] border-l-copper bg-white p-5 shadow-sm">
      <h3 className="font-serif text-lg font-semibold leading-snug">
        <Link href={`/item/${loan.id}`} className="hover:text-navy-soft">{loan.name}</Link>
      </h3>
      <div className="mt-2"><CategoryTag category={loan.category} /></div>

      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-edge pt-4 text-xs">
        <div>
          <dt className="font-semibold uppercase tracking-wide text-copper-label">APR</dt>
          <dd className="mt-1 text-sm font-semibold">{aprLabel(loan)}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-wide text-copper-label">Amount</dt>
          <dd className="mt-1 text-sm font-semibold">{amountLabel(loan)}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-wide text-copper-label">Term</dt>
          <dd className="mt-1 text-sm font-semibold">{termLabel(loan)}</dd>
        </div>
      </dl>

      <p className="mt-4 line-clamp-2 border-t border-edge pt-4 text-[13px] leading-relaxed text-muted">
        <strong className="text-navy">Best for:</strong> {guidance(loan).bestFor}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <span className="text-xs text-muted">{loan.decision}</span>
        <Link
          href={`/item/${loan.id}`}
          className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          Check rates &rarr;
        </Link>
      </div>
    </article>
  );
}

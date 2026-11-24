import Link from "next/link";
import { loans } from "@/data/loans";
import { LoanCard } from "./LoanCard";
import { AmountSearch } from "./AmountSearch";

export type SearchParams = { q?: string; amount?: string; loan_type?: string };

const types = [
  ["", "All"],
  ["personal", "Personal Loan"],
  ["mortgage", "Home Loans"],
  ["auto", "Auto Loan"],
] as const;

function href(p: SearchParams) {
  const sp = new URLSearchParams();
  Object.entries(p).forEach(([k, v]) => v && sp.set(k, v));
  const s = sp.toString();
  return s ? `/search?${s}` : "/search";
}

export function SearchView({ params }: { params: SearchParams }) {
  const { q = "", amount = "", loan_type = "" } = params;
  const amountNum = Number(amount.replace(/[^\d]/g, "")) || 0;
  const needle = q.trim().toLowerCase();

  const results = loans.filter((l) => {
    if (loan_type && l.category !== loan_type) return false;
    if (needle && !`${l.name} ${l.lender}`.toLowerCase().includes(needle)) return false;
    if (amountNum && !l.amountText) {
      if (l.amountMin != null && amountNum < l.amountMin) return false;
      if (l.amountMax != null && amountNum > l.amountMax) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-5 pt-8">
      <AmountSearch key={amountNum} initialAmount={amountNum || 100000} loanType={loan_type} />

      <nav aria-label="Loan type" className="mt-4 flex flex-wrap gap-2">
        {types.map(([value, label]) => {
          const active = loan_type === value;
          return (
            <Link
              key={label}
              href={href({ q, amount, loan_type: value })}
              aria-current={active ? "page" : undefined}
              className={`rounded-md border px-3.5 py-1.5 text-xs ${active ? "border-navy bg-navy text-white" : "border-edge bg-white text-ink hover:border-navy/40"}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <hr className="mt-6 border-edge" />

      <h1 className="mt-6 font-serif text-2xl font-semibold">
        {results.length} {results.length === 1 ? "result" : "results"}
      </h1>

      {results.length === 0 ? (
        <div className="mt-6 rounded-lg border border-edge bg-white p-8 text-center">
          <p className="font-medium">No loans match your search.</p>
          <p className="mt-1 text-sm text-muted">Try a different amount or loan type.</p>
          <Link href="/search" className="mt-4 inline-block rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-deep">
            Clear filters
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((l) => <LoanCard key={l.id} loan={l} />)}
        </div>
      )}
    </div>
  );
}

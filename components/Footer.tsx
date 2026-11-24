import Link from "next/link";
import { LogoMark } from "./Logo";

const legal = [
  ["privacy", "Privacy Policy"],
  ["terms", "Terms of Use"],
  ["editorial", "Editorial Policy"],
  ["contact", "Contact"],
] as const;

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-serif text-xl font-semibold"><LogoMark />LoanLens</p>
            <p className="mt-2 text-sm text-white/70">Loan rates, side by side.</p>
          </div>
          <nav aria-label="Explore">
            <h2 className="text-sm font-semibold">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li><Link href="/search" className="hover:text-white">Compare loans</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h2 className="text-sm font-semibold">Legal</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {legal.map(([slug, label]) => (
                <li key={slug}><Link href={`/legal/${slug}`} className="hover:text-white">{label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/65">
          <p>&copy; {new Date().getFullYear()} LoanLens. Add your company name and registration details here.</p>
          <p className="mt-3 italic">
            LoanLens is an independent information site. We are not a lender or a bank, we do not process loan
            applications and we cannot guarantee approval. Rates and terms are indicative and set by each lender, so
            confirm them with the lender before you borrow. We may earn a commission when you click through to a
            lender. Only borrow what you can afford to repay.
          </p>
        </div>
      </div>
    </footer>
  );
}

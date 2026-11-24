import Link from "next/link";
import { LogoMark } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-semibold" aria-label="LoanLens home">
          <LogoMark />
          <span className="hidden sm:inline">LoanLens</span>
        </Link>

        <span className="hidden items-center gap-2 rounded-full bg-navy-soft px-3.5 py-1.5 text-xs md:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-good" aria-hidden="true" />
          Free to compare
        </span>

        <div className="flex items-center gap-4">
          <form action="/search" method="get" role="search" className="hidden sm:block">
            <label htmlFor="header-q" className="sr-only">Compare loan rates</label>
            <input
              id="header-q"
              name="q"
              type="search"
              placeholder="Compare loan rates…"
              className="h-9 w-52 rounded-lg border border-white/20 bg-navy-soft/60 px-3 text-sm text-white placeholder:text-white/60"
            />
          </form>
          <Link href="/blog" className="text-sm hover:text-white/80">Blog</Link>
        </div>
      </div>
    </header>
  );
}

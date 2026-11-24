import type { Category, Loan } from "@/data/loans";

const trim = (x: number) => (Number.isInteger(x) ? x : Number(x.toFixed(1)));

export function ksh(n: number): string {
  if (n >= 1_000_000) return `KSh${trim(n / 1_000_000)}M`;
  if (n >= 1_000) return `KSh${trim(n / 1_000)}k`;
  return `KSh${n}`;
}

export const kshFull = (n: number) => `KSh${n.toLocaleString("en-KE")}`;

const pct = (n: number) => (Number.isInteger(n) ? n.toFixed(1) : String(n));

export const aprLabel = (l: Loan) =>
  l.aprMin === l.aprMax ? `${pct(l.aprMin)}%` : `${pct(l.aprMin)}\u2013${pct(l.aprMax)}%`;

export function amountLabel(l: Loan, full = false): string {
  if (l.amountText) return l.amountText;
  const f = full ? kshFull : ksh;
  if (l.amountMin != null && l.amountMax != null) return `${f(l.amountMin)}\u2013${f(l.amountMax)}`;
  if (l.amountMin != null) return `From ${f(l.amountMin)}`;
  if (l.amountMax != null) return `Up to ${f(l.amountMax)}`;
  return "Varies";
}

export function termLabel(l: Loan): string {
  if (l.termText) return l.termText;
  if (l.termMin != null && l.termMax != null) return `${l.termMin}\u2013${l.termMax}mo`;
  if (l.termMax != null) return `Up to ${l.termMax}mo`;
  return "Varies";
}

export const categoryLabel: Record<Category, string> = {
  personal: "Personal",
  auto: "Auto",
  mortgage: "Home loans",
};

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}

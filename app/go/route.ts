import { NextRequest, NextResponse } from "next/server";
import { getLoan } from "@/data/loans";

/**
 * Outbound click redirect. The destination always comes from data/loans.ts and never
 * from the query string, so this cannot be used as an open redirect.
 */
export function GET(req: NextRequest) {
  const loan = getLoan(req.nextUrl.searchParams.get("item_id") ?? "");
  if (!loan) return NextResponse.redirect(new URL("/", req.url), 302);

  const target = new URL(loan.applyUrl);
  for (const key of ["utm_source", "utm_campaign"]) {
    const value = req.nextUrl.searchParams.get(key);
    if (value) target.searchParams.set(key, value.slice(0, 100));
  }

  // Replace with your analytics call to track outbound clicks.
  console.log(JSON.stringify({ event: "outbound_click", itemId: loan.id, at: new Date().toISOString() }));

  return NextResponse.redirect(target, 302);
}

# LoanLens (Financial Horizon style)

Loan comparison site for Kenya. Next.js 15 (App Router), TypeScript, Tailwind CSS.
Light cream page, navy header and footer, serif headings, copper accents.

## Run

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Where things live

- `data/loans.ts`        the loan listings. Edit this file to add or change loans.
- `lib/copy.ts`          verdict / best-for / watch-out text, written per category.
- `lib/posts.ts`         blog posts.
- `components/SearchView.tsx`  search page: amount slider, loan type filter, results grid
                         (served at both `/` and `/search`, e.g. `/search?amount=100000&loan_type=personal`).
- `app/item/[id]`        loan detail page.
- `app/go/route.ts`      outbound click redirect (`/go?item_id=...`). It only redirects to the
                         `applyUrl` stored in `data/loans.ts`, so it cannot be used as an open redirect.
- `app/legal/[slug]`     placeholder Privacy / Terms / Editorial / Contact pages.
- `tailwind.config.ts`   theme colours and fonts.

## Before you publish

1. All 8 loans are SAMPLE data (`verified: false`). Confirm rates, limits, requirements and links with
   each lender, then set `verified: true` and update `lastChecked`. Unverified loans show a notice.
2. Write the real legal pages (`app/legal/[slug]/page.tsx`) and the company line in `components/Footer.tsx`.
3. Add analytics to `app/go/route.ts` if you want to track outbound clicks.
4. If you earn commission, keep the disclosure text and `rel="sponsored"` on the outbound link.
5. Log in / Sign up are not included because there is no account system yet.

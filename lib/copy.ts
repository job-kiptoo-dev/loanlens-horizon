import type { Loan } from "@/data/loans";

// Neutral, category-level guidance. It makes no claims beyond the data in data/loans.ts.
export function guidance(loan: Loan) {
  const by = {
    personal: {
      bestFor: "Borrowers with regular income who want a fixed repayment schedule.",
      watchOut: "Rates are ranges. Your offer depends on the lender's assessment, and late payments can add charges.",
    },
    auto: {
      bestFor: "Buyers financing a vehicle who can meet the lender's deposit and insurance rules.",
      watchOut: "Lenders often require insurance and may hold the logbook until you finish repaying. Ask about all fees.",
    },
    mortgage: {
      bestFor: "Buyers comparing long-term home financing.",
      watchOut: "Long terms mean more total interest. Ask about valuation, legal and insurance costs before you commit.",
    },
  }[loan.category];

  return {
    verdict: `${loan.lender} lists this loan at ${loan.aprMin}\u2013${loan.aprMax}% APR. Compare it with at least two other lenders before you apply, and check the total cost, not only the rate.`,
    ...by,
    analysis: [
      `${loan.summary} The figures on this page are indicative and come from the lender's published information.`,
      "Your actual rate, limit and term depend on the lender's assessment of your income and circumstances. Read the full terms, including fees and the penalty for late payment, before you accept an offer.",
      "Compare the monthly repayment you can comfortably afford, not the largest amount you can borrow.",
    ],
  };
}

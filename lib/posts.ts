export type Post = { slug: string; title: string; excerpt: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "how-to-compare-loan-offers",
    title: "How to compare loan offers",
    excerpt: "Look past the headline rate. Total cost, fees and repayment terms decide what a loan really costs.",
    body: [
      "Start with the annual percentage rate, but do not stop there. Two loans with the same rate can cost different amounts once fees and insurance are added.",
      "Ask each lender for the total amount you would repay over the full term. Divide it by the number of months to see the real monthly cost.",
      "Check what happens if you pay late or repay early. Penalties and early-repayment terms vary between lenders and can change which loan is cheapest for you.",
    ],
  },
  {
    slug: "what-apr-tells-you",
    title: "What APR tells you, and what it does not",
    excerpt: "APR is a useful yardstick for comparing loans. It is not the whole story.",
    body: [
      "APR expresses the yearly cost of borrowing as a percentage. It lets you compare loans of different sizes on one scale.",
      "It does not tell you whether you qualify. Most lenders publish a range, and your own rate depends on their assessment of you.",
      "Use APR to shortlist two or three lenders, then ask each for a written offer before you decide.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

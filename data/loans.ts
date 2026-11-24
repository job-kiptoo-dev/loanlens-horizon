export type Category = "personal" | "auto" | "mortgage";

export type Loan = {
  id: string;
  name: string;
  lender: string;
  category: Category;
  aprMin: number;
  aprMax: number;
  amountMin?: number;
  amountMax?: number;
  amountText?: string; // overrides the computed amount label
  termMin?: number;
  termMax?: number;
  termText?: string; // overrides the computed term label
  requirements: string[];
  decision: string;
  summary: string;
  applyUrl: string; // official lender page; used by /go
  lastChecked: string; // ISO date you last confirmed the details
  verified: boolean; // set true once you have confirmed the details with the lender
};

/**
 * SAMPLE DATA. Every entry is marked verified: false.
 * Confirm rates, limits and links with each lender, then set verified: true
 * and update lastChecked before you publish.
 */
export const loans: Loan[] = [
  {
    id: "nbk-personal-loan",
    name: "National Bank of Kenya Personal Loan",
    lender: "National Bank of Kenya",
    category: "personal",
    aprMin: 14, aprMax: 18,
    amountMin: 50000, amountMax: 3000000,
    termMin: 12, termMax: 60,
    requirements: ["Kenyan resident", "NBK account", "Regular salary"],
    decision: "2-5 business days",
    summary: "An unsecured personal loan for salaried employees, with flexible repayment terms.",
    applyUrl: "https://www.nationalbank.co.ke/for-you/get-a-loan/unsecured-personal-loan/unsecured-personal-loan",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "kcb-personal-loan",
    name: "KCB Bank Personal Loan",
    lender: "KCB Bank",
    category: "personal",
    aprMin: 15, aprMax: 18,
    amountMin: 10000, amountMax: 5000000,
    termMin: 12, termMax: 72,
    requirements: ["Kenyan resident", "KCB account", "Regular salary"],
    decision: "2-5 business days",
    summary: "A personal loan for KCB account holders with a long repayment window.",
    applyUrl: "https://kcbgroup.com/",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "dtb-personal-loan",
    name: "DTB Personal Loan",
    lender: "Diamond Trust Bank",
    category: "personal",
    aprMin: 14, aprMax: 17,
    amountMin: 50000, amountMax: 3000000,
    termMin: 12, termMax: 60,
    requirements: ["Kenyan resident", "DTB account", "Regular salary"],
    decision: "2-5 business days",
    summary: "An unsecured personal loan for DTB customers with regular income.",
    applyUrl: "https://www.dtbafrica.com/",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "equity-personal-loan",
    name: "Equity Bank Personal Loan",
    lender: "Equity Bank",
    category: "personal",
    aprMin: 14, aprMax: 17,
    amountMin: 10000, amountMax: 5000000,
    termMin: 12, termMax: 72,
    requirements: ["Kenyan resident", "Equity account", "Regular salary"],
    decision: "1-3 business days",
    summary: "A personal loan for Equity account holders, with a wide range of amounts.",
    applyUrl: "https://equitygroupholdings.com/",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "coop-personal-loan",
    name: "Co-operative Bank Personal Loan",
    lender: "Co-operative Bank",
    category: "personal",
    aprMin: 15, aprMax: 18,
    amountMin: 10000, amountMax: 5000000,
    termMin: 12, termMax: 72,
    requirements: ["Kenyan resident", "Co-op Bank account", "Regular salary"],
    decision: "2-5 business days",
    summary: "A salary-backed personal loan for Co-operative Bank customers.",
    applyUrl: "https://www.co-opbank.co.ke/",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "ecobank-personal-loan",
    name: "Ecobank Kenya Personal Loan",
    lender: "Ecobank Kenya",
    category: "personal",
    aprMin: 11, aprMax: 15,
    amountMin: 20000, amountMax: 3000000,
    termMin: 12, termMax: 60,
    requirements: ["Kenyan resident", "Ecobank account", "Regular salary"],
    decision: "2-5 business days",
    summary: "A personal loan from Ecobank for customers with a salary account.",
    applyUrl: "https://ecobank.com/ke",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "stanbic-vehicle-loan",
    name: "Stanbic Bank Vehicle Loan",
    lender: "Stanbic Bank",
    category: "auto",
    aprMin: 13, aprMax: 18,
    amountMin: 500000,
    amountText: "From KSh500k",
    termMin: 12, termMax: 60,
    requirements: ["Kenyan citizen or resident", "Regular income", "Comprehensive insurance"],
    decision: "3-5 business days",
    summary: "Vehicle financing from Stanbic Bank for buyers with regular income.",
    applyUrl: "https://www.stanbicbank.co.ke/",
    lastChecked: "2026-11-20", verified: false,
  },
  {
    id: "stanbic-affordable-housing-loan",
    name: "Stanbic Affordable Housing Loan",
    lender: "Stanbic Bank",
    category: "mortgage",
    aprMin: 8.99, aprMax: 12,
    amountText: "Varies",
    termMax: 300,
    termText: "Up to 300mo",
    requirements: ["Kenyan resident", "Regular income"],
    decision: "Varies",
    summary: "Long-term home financing aimed at buyers of affordable housing.",
    applyUrl: "https://www.stanbicbank.co.ke/",
    lastChecked: "2026-11-20", verified: false,
  },
];

export const getLoan = (id: string) => loans.find((l) => l.id === id);

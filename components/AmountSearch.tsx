"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AmountSearch({ initialAmount, loanType }: { initialAmount: number; loanType: string }) {
  const router = useRouter();
  const [amount, setAmount] = useState(initialAmount);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const sp = new URLSearchParams({ amount: String(amount) });
    if (loanType) sp.set("loan_type", loanType);
    router.push(`/search?${sp.toString()}`);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="flex-1">
        <label htmlFor="amount" className="mb-1.5 block text-xs text-muted">How much do you need?</label>
        <div className="flex items-center gap-4 rounded-lg border border-edge bg-white px-4 py-3">
          <input
            id="amount"
            type="range"
            min={10000}
            max={5000000}
            step={10000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="h-2 flex-1 cursor-pointer"
          />
          <output htmlFor="amount" className="w-28 text-right text-sm font-semibold tabular-nums">
            KSh{amount.toLocaleString("en-KE")}
          </output>
        </div>
      </div>
      <button type="submit" className="h-[50px] rounded-lg bg-navy px-8 text-sm font-semibold text-white hover:bg-navy-deep">
        Search
      </button>
    </form>
  );
}

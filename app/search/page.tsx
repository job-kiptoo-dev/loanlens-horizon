import type { Metadata } from "next";
import { SearchView, type SearchParams } from "@/components/SearchView";

export const metadata: Metadata = { title: "Compare loans" };

export default async function Search({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return <SearchView params={await searchParams} />;
}

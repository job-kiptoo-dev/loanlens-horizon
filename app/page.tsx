import { SearchView, type SearchParams } from "@/components/SearchView";

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return <SearchView params={await searchParams} />;
}

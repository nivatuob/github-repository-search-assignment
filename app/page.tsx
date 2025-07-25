// 'use client'

import { Suspense } from "react";
import { Search } from "./ui/search";
import { Results } from "./ui/results";
import { ResultsSkeleton } from "./ui/skeletons";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-64 sm:pt-0">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Search />

        <Suspense key={query + currentPage} fallback={<ResultsSkeleton />}>
          <Results />
        </Suspense>
      </main>
    </div>
  );
}

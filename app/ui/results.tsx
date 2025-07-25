"use client";

import { useSearchParams } from "next/navigation";
import { useRepositories } from "@/app/hooks/use-repositories";
import { ResultsSkeleton } from "./skeletons";
import { RepositoryCard } from "./repository-card";
import Pagination from "./pagination";
import { getTotalPages } from "@/app/lib/utils";

export function Results() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query")?.toString() || "";
  const page = parseInt(searchParams.get("page") || "") || 1;

  const { data, isFetching } = useRepositories(search, page);

  if (isFetching) return <ResultsSkeleton />;

  if (!data) return null;

  if (!data.total_count && search) return <>No results...</>;

  const totalPages = getTotalPages(data.total_count);

  return (
    <section className="flex flex-col gap-10 items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-fr">
        {data.items.map((repository) => (
          <RepositoryCard repository={repository} key={repository.id} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </section>
  );
}

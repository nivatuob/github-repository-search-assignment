import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { RepositoryAPIResponse } from "@/app/lib/definitions";
import { SEARCH_API_URL } from "@/app/lib/constants";

const fetchRepositories = async (
  query: string,
  page = 1
): Promise<RepositoryAPIResponse> => {
  const url = queryString.stringifyUrl({
    url: SEARCH_API_URL,
    query: {
      query,
      page,
    },
  });
  const response = await fetch(url);
  const data = await response.json();

  if (!data.items?.length) {
    return {
      total_count: 0,
      items: [],
    };
  }

  return data;
};

const useRepositories = (query: string, page: number) => {
  return useQuery({
    queryKey: ["repositories", query, page],
    queryFn: () => fetchRepositories(query, page),
    enabled: !!query,
  });
};

export { useRepositories, fetchRepositories };

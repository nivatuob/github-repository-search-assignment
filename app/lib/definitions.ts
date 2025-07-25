export interface RepositoryAPIResponse {
  total_count: number;
  items: Array<Repository>;
}

export interface Repository {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

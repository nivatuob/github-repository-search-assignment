import { PER_PAGE } from "@/app/lib/constants";
import { Octokit } from "@octokit/core";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("query") || "";
    const page = parseInt(searchParams.get("page") || "") || 1;
    const sort =
      (searchParams.get("sort") as
        | "updated"
        | "stars"
        | "forks"
        | "help-wanted-issues") || undefined;

    const octokit = new Octokit();

    const { data } = await octokit.request("GET /search/repositories", {
      q,
      page,
      per_page: PER_PAGE,
      sort,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

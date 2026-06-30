import { NextResponse } from "next/server";
import { searchRemediesByQuery } from "../../../lib/remedies";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const results = searchRemediesByQuery(query);
  return NextResponse.json({ results });
}

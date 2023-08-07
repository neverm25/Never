import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const country = req?.geo?.country || process.env.NEXT_PUBLIC_DEFAULT_FLAG;
  req.nextUrl.searchParams.set("country", country);
  return NextResponse.rewrite(req.nextUrl);
}

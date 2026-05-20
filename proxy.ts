//proxy.ts

import { intlayerMiddleware } from "next-intlayer/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/fr/coming-soon", request.url));
  }
  
  return intlayerMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
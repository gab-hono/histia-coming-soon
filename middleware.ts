import { intlayerMiddleware } from "next-intlayer/middleware";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) =>
    intlayerMiddleware(request);

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
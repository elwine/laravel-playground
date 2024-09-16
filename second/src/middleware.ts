import { NextRequest, NextResponse } from "next/server";
import { setNotifyToast } from "./lib/toast-notify";

export const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  if (path.startsWith("/profile")) {
    const token = req.cookies.get("token");
    const targetUrl = new URL("/login", req.url);
    if (!token) {
      const res = NextResponse.redirect(targetUrl);
      return setNotifyToast(res, "Vui lòng đăng nhập");
    }
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

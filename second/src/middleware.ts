import { NextRequest, NextResponse } from "next/server";
import { setNotifyToast } from "./lib/toast-notify";
import { getProfile } from "./lib/get-profile";
import { setSession } from "./lib/session";

export const middleware = async (req: NextRequest) => {
  const loginUrl = new URL("/login", req.url);
  // NEXT REPSONE INSTANCE TO REDICT TO LOGIN PAGE
  const errResponse = setNotifyToast(
    NextResponse.redirect(loginUrl),
    "Vui lòng đăng nhập",
  );

  const path = req.nextUrl.pathname;
  const token = req.cookies.get("token");

  if (token) {
    // verify
    const result = await getProfile(token.value);
    if (!result) return errResponse;
    const { success, user } = result;

    if (!success) return errResponse;

    setSession(token.value, user);
  }

  if (path.startsWith("/profile")) {
    if (!token) {
      return errResponse;
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

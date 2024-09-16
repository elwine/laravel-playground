import { NextRequest, NextResponse } from "next/server";
import { setNotifyToast } from "./lib/toast-notify";
import { getProfile } from "./lib/get-profile";

export const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  if (path.startsWith("/profile")) {
    const token = req.cookies.get("token");
    const targetUrl = new URL("/login", req.url);

    const errResponse = setNotifyToast(
      NextResponse.redirect(targetUrl),
      "Vui lòng đăng nhập",
    );

    if (!token) {
      return errResponse;
    }

    // verify
    const result = await getProfile(token.value);
    if (!result) return errResponse;

    const { success, user } = result;

    if (!success) return errResponse;

    console.log(user);
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

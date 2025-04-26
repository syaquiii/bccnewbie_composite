import { NextResponse, type NextRequest } from "next/server";
import { isTokenValid } from "./utils/verifyAuth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get("authToken")?.value;

  const guestProtectedRoutes = ["/login", "/register"];

  if (guestProtectedRoutes.includes(pathname)) {
    if (authToken && isTokenValid(authToken)) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  if (pathname.startsWith("/profile")) {
    if (!authToken || !isTokenValid(authToken)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

import { NextResponse } from "next/server"

export function middleware(req) {
	const isLoggedIn = req.cookies.get("authToken");

	if (!isLoggedIn && req.nextUrl.pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
}

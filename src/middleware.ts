// src/middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Verify the token
  const token = await getToken({ req: request });

  // Check if the request is for the admin area
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token && request.nextUrl.pathname !== '/admin/login') {
      // Redirect to login if no token and trying to access admin pages
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    if (token && request.nextUrl.pathname === '/admin/login') {
      // Redirect to admin dashboard if already logged in
      const dashboardUrl = new URL('/admin', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

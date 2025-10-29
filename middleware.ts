import { NextResponse, type NextRequest } from 'next/server';

const locales = ['ru', 'uk', 'en'];
const DEFAULT = 'uk';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore next internals and files
  if (pathname.startsWith('/_next') || pathname.includes('.') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // If already prefixed with a locale, continue
  const first = pathname.split('/')[1];
  if (locales.includes(first)) return NextResponse.next();

  // Otherwise, redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|.*\..*).*)'],
};

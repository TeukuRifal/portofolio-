// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { user } } = await supabase.auth.getUser();

  const role = user?.user_metadata?.role;
  const isProtected = req.nextUrl.pathname.startsWith('/dashboard');

  if (isProtected && role !== 'admin') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'], // hanya halaman dashboard dan turunannya yang dilindungi
};

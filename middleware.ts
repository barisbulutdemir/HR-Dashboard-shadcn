// pages/middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'; // Add this
import cookie from 'cookie'

export async function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get('cookie') ?? '');
  const token = cookies['access'];
  console.log(cookies); // Log all cookies to the console



  if (req.nextUrl.pathname.includes("/employee")) {
    try {
      jwt.verify(token, 'django-insecure-un$te1j*#_s8y6aevoozbg^t1og__bhlk%h7=g3a$jxqig8++t'); // Check token validity
    } catch(e) {
      return NextResponse.redirect('http://localhost:3000/login');
    }
  }

  return NextResponse.next();
}

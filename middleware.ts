// pages/middleware.ts
import { NextRequest, NextResponse } from 'next/server'


export async function middleware(req: NextRequest) {
  
  console.log('middleware'); // Log all cookies to the console


}

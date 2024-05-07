import { NextRequest, NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    
        const path = request.nextUrl.pathname;
        const isPublic = path==='/login' || path==="/register" || path==='/forgot-password';
        const token = request.cookies.get("token") || "";
        // console.log('token ', token)
        if(isPublic && token){
            return NextResponse.redirect(new URL('/', request.nextUrl))
        } 
        if(!isPublic && !token){
            return NextResponse.redirect(new URL('/login', request.nextUrl))
        }
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/register',
    '/login',
    '/register',
    '/forgot-password'
  ],
}
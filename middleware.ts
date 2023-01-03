import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { jwtVerify } from 'jose'

const protectedPaths = ['home', 'details', 'search']
const authPaths = ['signin', 'signup']

export default async function middleware(req: NextRequest) {
	const splitedPath = req.nextUrl.pathname.split('/')
	if (protectedPaths.includes(splitedPath[1])) {
		const token = req.cookies.get('authToken')?.value

		try {
			await jwtVerify(String(token), new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET))
			return NextResponse.next()
		} catch (_) {
			return NextResponse.redirect(new URL('/auth/signin', req.url))
		}
	}

	if(authPaths.includes(splitedPath[2])) {
		const token = req.cookies.get('authToken')?.value
		try {
			await jwtVerify(String(token), new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET))
			return NextResponse.redirect(new URL('/home', req.url))
		} catch (_) {
			return NextResponse.next()
		}
	}
}

export const config = {
	matcher: ['/home', '/details/:path*', '/search', '/auth/:path*']
}
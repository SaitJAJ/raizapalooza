import {cookies} from "next/headers";
// import {testJwtCookie} from "@/serverFunctions/JWTutils";
import {NextResponse} from "next/server";

export function middleware(request){
    if(request.nextUrl.pathname.startsWith('/admin')){
        if(!request.nextUrl.pathname.startsWith('/admin/login') && !request.nextUrl.pathname.startsWith('/admin/register')){
            let cookie = cookies().get('jwtoken')

            if(!cookie){
                return NextResponse.rewrite(new URL('/', request.url))
            }

            // if(!cookie || !testJwtCookie(cookie)){
            //     return NextResponse.rewrite(new URL('/', request.url))
            // }
        }
    }
}
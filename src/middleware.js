import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken"
 
export function middleware(request) {
    const authToken=request.cookies.get("authToken")?.value;

    try{
        if(authToken){
            const data=jwt.verify(authToken,process.env.JWT_SECRET);
            console.log("MIDDLEWARE-DATA:- ",data);
        }
    }catch(error){
        console.log(error);
    }

    if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/user"){
        return;
    }
    const loggedInUserNotAccessPath=request.nextUrl.pathname === '/log-in';
    if(loggedInUserNotAccessPath){
        if(authToken){
            return NextResponse.redirect(new URL("/profile/user",request.url));
        }
        else 
        {
            if(!authToken)
        {
            if(request.nextUrl.pathname.startsWith("/api"))
            {
                return NextResponse.json({
                    message:"Access Denied!!",
                    success:false
                },
                {
                    status:401
                })
            }
            return NextResponse.redirect(new URL("/log-in",request.url));
        }   
        }
        }
        //verify
        // if(authToken){
        //     const data=jwt.verify(authToken,secret_key);
        //     console.log(data);
        // }
        }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/',
  '/login',
  '/sign-up',
  '/add-task',
  '/show-task',
  '/profile/:path*',
  '/api/:path*']
}
import { updateSession } from "@/utils/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";

/**
 * This is code run on every incoming HTTP request to the server which matches
 * the specified routes in the config object.
 */

export async function middleware(request: NextRequest) {
  const { response, authenticated } = await updateSession(request);

  // If user is not signed in and the current path is not a valid path, redirect
  // the user to /login.
  const validPaths = ["/", "/login"];
  if (!authenticated && !validPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
    To be safe it runs on almost all requests, see below:
    
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
};

/**
 * 
 * CLERK AUTH MIDDLEWARE
 * Replace it with similar code using Supabase.
 * 
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/"]
});

export const config = {
  // Protects all routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};
*/

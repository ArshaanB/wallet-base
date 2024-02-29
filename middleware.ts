import { updateSession } from "@/utils/supabase/middleware";
import { NextRequest } from "next/server";

/**
 * This is code run on every incoming HTTP request to the server which matches
 * the specified routes in the config object.
 */

export async function middleware(request: NextRequest) {
  return await updateSession(request);
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

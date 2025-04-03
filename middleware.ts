// Original code (commented out for reference)
/*
import { ipAddress, next } from "@vercel/edge";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest } from "next/server";

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});

// Define which routes you want to rate limit
export const config = {
  matcher: ["/games/astro-quiz"],
};

async function withRateLimit(request: Request, event: NextFetchEvent) {
  const ip = ipAddress(request) || "127.0.0.1";
  const { success, pending, limit, reset, remaining } =
    await ratelimit.limit(ip);

  return success
    ? next()
    : Response.redirect(new URL("/blocked.html", request.url));
}

export default withAuth(withRateLimit, {
  callbacks: {
    authorized: async ({ req, token }) => {
      const pathname = req.nextUrl.pathname;
      if (pathname.startsWith("/_next") || pathname === "/favicon.ico")
        return true;

      if (token) return true;

      return false;
    },
  },
});
*/

// Simplified middleware that doesn't depend on Vercel KV
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Simplify the matcher to protect only necessary routes
export const config = {
  matcher: ["/games/astro-quiz", "/users/dashboard"],
};

// Simplified middleware that only handles authentication
export default withAuth(
  // Function that runs for each request
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const pathname = req.nextUrl.pathname;
        
        // Always allow access to static files and favicon
        if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
          return true;
        }
        
        // Allow access to the home page
        if (pathname === "/") {
          return true;
        }
        
        // Allow access to auth pages
        if (pathname.startsWith("/auth/")) {
          return true;
        }
        
        // For all other routes, check if the user is authenticated
        return !!token;
      },
    },
  }
);

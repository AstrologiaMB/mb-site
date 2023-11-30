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

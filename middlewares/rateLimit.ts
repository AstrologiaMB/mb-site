import { ipAddress, next } from "@vercel/edge";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { NextFetchEvent, NextMiddleware, NextResponse } from "next/server";

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});

export default function withRateLimitMiddleware(middleware: NextMiddleware) {
  return async function middleware(request: Request, event: NextFetchEvent) {
    // You could alternatively limit based on user ID or similar
    const ip = ipAddress(request) || "127.0.0.1";
    const { success, pending, limit, reset, remaining } =
      await ratelimit.limit(ip);

    if (success) {
      return middleware(request, event);
    } else {
      NextResponse.redirect(new URL("/blocked.html", request.url));
    }
  };
}

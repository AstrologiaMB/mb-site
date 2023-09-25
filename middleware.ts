import { ipAddress, next } from "@vercel/edge";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});

// Define which routes you want to rate limit
export const config = {
  matcher: "/games/astro-quiz",
};

export default async function middleware(request: Request) {
  // You could alternatively limit based on user ID or similar
  console.log("asd");
  const ip = ipAddress(request) || "127.0.0.1";
  const { success, pending, limit, reset, remaining } =
    await ratelimit.limit(ip);
  console.log(success);

  return success
    ? next()
    : Response.redirect(new URL("/blocked.html", request.url));
}

import { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("HELLO FROM BUN", { status: 200 });
    } else if (url.pathname === "/dashboard") {
      return new Response("HELLO FROM DASHBOARD", { status: 200 });
    } else {
      return new Response("404 PAGE NOT FOUND", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});

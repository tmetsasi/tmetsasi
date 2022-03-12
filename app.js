import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.120.0/http/file_server.ts";


const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname.includes("css")) {
    return await serveFile(request, "static/styles.css");
  } else {
    return await serveFile(request, "static/index.html");
  }
};

let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

serve(handleRequest, { port: port });
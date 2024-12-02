// import { fun } from "@/app/utils/image";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import books from "./books";
import authors from "./authors";
// import sharp from "sharp";

const app = new Hono().basePath("/api/img");

// app.get("/", (c) => {
//   return c.json({
//     message: "Hello from Hono! and next js",
//   });
// });

app.route("/authors", authors);
app.route("/books", books);

export const GET = handle(app);

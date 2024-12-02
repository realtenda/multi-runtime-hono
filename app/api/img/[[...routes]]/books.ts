// books.ts
import { fun, pictureFetcher } from "@/app/utils/image";
import { Hono } from "hono";

export const runtime = "nodejs";

const app = new Hono();

app.get("/", async (c) =>
  c.newResponse(await (await pictureFetcher()).arrayBuffer())
);
app.post("/", (c) => c.json("create a book", 201));
app.get("/:id", async () => {
  const buffer = await fun();
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
});
export default app;

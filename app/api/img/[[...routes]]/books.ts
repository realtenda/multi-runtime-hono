// books.ts
import { pictureFetcher, processImg } from "@/app/utils/image";
import { Hono } from "hono";

export const runtime = "nodejs";

const app = new Hono();

app.get("/", async (c) =>
  c.newResponse(await (await pictureFetcher()).arrayBuffer())
);
app.post("/", (c) => c.json("create a book", 201));
app.get("/:id", async (c) => {
  const imgUrl = new URL(c.req.url).searchParams.get("imgUrl");

  const srcImg = imgUrl ? imgUrl : "https://picsum.photos/200/300";

  const buffer = await processImg(srcImg);
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
});
export default app;

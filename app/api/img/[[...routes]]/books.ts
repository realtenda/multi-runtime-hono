// books.ts
import { fun, pictureFetcher } from "@/app/utils/image";
import { Hono } from "hono";

export const runtime = "nodejs";

const app = new Hono();

app.get("/", async (c) => c.newResponse((await pictureFetcher()).body));
app.post("/", (c) => c.json("create a book", 201));
app.get("/:id", async (c) => c.newResponse(await fun()));

export default app;

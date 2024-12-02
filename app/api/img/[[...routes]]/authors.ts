// authors.ts
import { Hono } from "hono";

export const runtime = "edge";

const app = new Hono();

app.get("/", (c) => c.json("list authors"));
app.post("/", (c) => c.json("create an author", 201));
app.get("/:id", (c) => {
  console.log("l am running now");
  return c.json(`get ${c.req.param("id")}`);
});

export default app;

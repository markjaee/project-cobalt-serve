import { Application, Context } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

app.use((ctx : Context) => {
    ctx.response.body = "Hello world!";
});

await app.listen({ port: 8000 });
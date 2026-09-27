const http = require("node:http");

const startTime = Date.now();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("hello from threadide demo\n");
    return;
  }
  if (req.url === "/health") {
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, uptime }));
    return;
  }
  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(process.env.PORT ?? 8080, () => {
  console.log("listening");
});

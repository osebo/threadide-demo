const http = require("node:http");

const startTime = Date.now();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>threadide demo</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #1a1a1a;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }
    h1 {
      color: #ffffff;
      font-size: 4rem;
      font-weight: 700;
      margin: 0;
      text-align: center;
      letter-spacing: -0.02em;
    }
    footer {
      position: fixed;
      bottom: 2rem;
      color: #888;
      font-size: 0.875rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>threadide demo</h1>
  <footer>powered by thread ide</footer>
</body>
</html>
`);
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

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("WELCOME TO HOME PAGE");
  } else if (req.url === "/dashboard") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("WELCOME TO DASHBOARD PAGE");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 PAGE NOT FOUND");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server listing on http://${hostname}:${port}`);
});

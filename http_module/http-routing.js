const http = require("node:http");

const server = http.createServer((req, res) => {
  // res.end(req.url);
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<center><h1>Home Page</h1></center>");
      break;
    case "/about":
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<center><h1>About Page</h1></center>");
      break;
    case "/api":
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify({ firstName: "Bruce", lastName: "Wayne" }));
      break;
    default:
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<center><h1>404! Page Not Found</h1></center>");
  }
});

server.listen(3000, () => console.log("Server is running"));

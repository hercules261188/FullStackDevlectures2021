// Step 1: Import http module
const http = require("http");
// Step 3: Send some data
const requestListener = function (req, res) {
  console.log("req", req);
  res.writeHead(200);
  res.end("Hello, World!");
};

// Step 2: Createserver
const server = http.createServer(requestListener);
server.listen(8080);

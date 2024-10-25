const http = require("http");

const server = http.createServer((req, res) => {
    console.log("work");
    // You should also send a response back to the client
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});
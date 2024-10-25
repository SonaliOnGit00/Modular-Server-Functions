/* this set of code shows more information about the visitor’s request.
When someone visits the server, it logs three things to the console:
req.url: The path the visitor is asking for (e.g., /home, /about).
req.method: The type of request (usually GET for fetching data or POST for sending data).
req.headers: Extra details about the visitor's request (e.g., the browser they’re using).
*/

const http = require("http");

const server = http.createServer((req, res) =>  {
    console.log("URL:", req.url, "Method:", req.method,"header", req.headers); // request object
    res.end(); // Don't forget to send a response!
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
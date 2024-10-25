/*This version of the code sets up a server that responds with an actual webpage!*/

const http = require("http"); // Creates the server, just like before.

const server = http.createServer((req, res) =>  { 
   
    res.setHeader("Content-Type", "text/HTML");  //Set the response type to HTML: This tells the browser, "Hey, I'm sending you an HTML page!"

    res.write("<html>");  //The res.write() function sends pieces of HTML code. It's like building the webpage.
    res.write("<head><title>My work is functioning</title></head>");
    res.write("<body><h1>how you doin'</h1></body>");
    res.write("</html>");

    res.end(); //Finishes sending the webpage.
});

server.listen(3001, () => {
    console.log("Server listening on port 3001");
});
// it loads a tool called http, which is used to make servers:
const http = require("http"); 

// it creates a server:
const server = http.createServer((req, res) =>  {
    
    //Whenever someone visits this server, it writes "work" in the console.
    console.log("work"); 

    // Then it finishes the response to the visitor with res.end(), which means "I'm done sending you the response."
    res.end(); 
})
//the server starts listening on port 3000:
server.listen(3000, () => {
    console.log("Server listening on port 3000"); //When the server is ready, it logs "Server listening on port 3000" to let you know it's running.
});
/**
 * This version of the code adds a simple routing feature,
 *  meaning the server responds differently depending on the URL the user visits.
 *  
 */
const http = require("http");

const server = http.createServer((req, res) =>  {

    const url = req.url; //This stores the URL (path) the user is trying to access, like / or /about.

    //If the user visits / (the root page), The server sends an HTML page with a message "how you doin'"
    if(url==="/"){ 
        res.setHeader("Content-Type", "text/HTML"); 
        res.write("<html>");
        res.write("<head><title>My work is functioning</title></head>");
        res.write("<body><h1>how you doin'</h1></body>");
        res.write("</html>");
        return res.end();
    }
   //If the user visits any other URL (e.g., /about, /contact, etc.), the server sends a different message: "how am I doin'??".
    res.setHeader("Content-Type", "text/HTML"); 
    res.write("<html>");
    res.write("<head><title>My work is functioning</title></head>");
    res.write("<body><h1>how am i doin'??</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
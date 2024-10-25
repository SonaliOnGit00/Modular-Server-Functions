/**
 * This code builds on the previous examples but now introduces file creation and redirection.
 */


const http = require("http");

const server = http.createServer((req, res) =>  {
    //The fs module is used to work with the file system, like reading or writing files. In this case, it will write a file.
    const fs = require("fs"); 

    const url = req.url;
    //If the user visits /, the server sends a simple HTML page with two messages (lyrics from Taylor Swift's song)
    if(url==="/"){
        res.setHeader("Content-Type", "text/HTML"); 
        res.write("<html>");
        res.write("<head><title>My work is working</title></head>");
        res.write("<body><h1>I knew you were trouble when you walked in..</h1><h2> So shame on me now flew mw to places i'd never been till you put me down , oh! </h2></body>");
        res.write("</html>");
        return res.end();
    }
    //If the user visits /file, the server:Creates a new file called newfile.txt with the text.
    if(url==="/file"){
        fs.writeFileSync("newfile.txt", "yo! its been a long day, without you my friend.");
        res.statusCode=302;
        res.setHeader("Location","/");
        return res.end();
    }
   
    //If the user visits any other URL, the server responds with a different HTML page containing another message.
    res.setHeader("Content-Type", "text/HTML"); 
    res.write("<html>");
    res.write("<head><title>My work is working again</title></head>");
    res.write("<body><h1>Once upon a time a few mistakes ago.</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
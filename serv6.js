const http = require("http");

const server = http.createServer((req, res) =>  {
    const fs = require("fs");
    const method = req.method;
    const url = req.url;
    if(url==="/"){
        res.setHeader("Content-Type", "text/HTML"); 
        res.write("<html>");
        res.write("<head><title>Long time no see</title></head>");
        res.write('<body><form action="/file" method="post" name="msg"><input type"text" name="msg"><button type="submit">sub</button></body');
        res.write("</html>");
        return res.end();
    }
    if(url==="/file" && method ==="post"){
        const body = [];
        req.on("data",(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        fs.writeFileSync("fun.txt", "HELLO SIR ");
        res.statusCode=302;
        res.setHeader("Location","/");
        return res.end();
    }
   
    res.setHeader("Content-Type", "text/HTML"); 
    res.write("<html>");
    res.write("<head><title>ohh thanks for your attention</title></head>");
    res.write("<body><h1> congo!</h1><h2>i know you have been redirected to a new page.. but what can i say i am the one doing this to you..<br>hahahahah</h2></body>");
    res.write("</html>");
    res.end();
});

server.listen(3001, () => {
    console.log("Server listening on port 3001");
});
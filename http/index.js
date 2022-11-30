const http = require("http");

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    if(req.url == '/'){
    res.end("hello from other side home")
    } else if (req.url == '/about'){
        res.end("hello from other side about")
    } else if (req.url == '/contact'){
        res.end("hello from other side contact")
    } else{
        res.writeHead(404);
        res.end(" 404 error")
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listing from port no 8000 hi hello");
})
const http = require("http");
const properties = [
    {id: 1, title:"Villa "}
]
const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("salam mn server");
});

server.listen(3000, () => {
    console.log("server khddam f http://localhost:3000");
});
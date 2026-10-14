const http = require("http");
const properties = [
    {id: 1, title: "Villa Palmeraie", city: "Marrakech", price: 480000},
    {id: 2, title: "Appartement Gueliz", city: "Marrakech", price:165000},
];
const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    if (req.method == "GET" && req.url === "/properties"){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(properties));
    return;
    }
    res.writeHead(200, {"cONTENT-Type": "application/json"});
    res.end(JSON.stringify({message:"Not found"}));
});

server.listen(3000, () => {
    console.log("server khddam f http://localhost:3000");
});
const http = require("http");

const properties = [
    {id: 1, title: "Villa Palmeraie", city: "Marrakech", price: 480000},
    {id: 2, title: "Appartement Gueliz", city: "Marrakech", price: 165000},
];

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    // route 1: la liste
    if (req.method === "GET" && req.url === "/properties") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(properties));
        return;
    }

    // route 2: property wa7da
    if (req.method === "GET" && req.url.startsWith("/properties/")) {
        const id = Number(req.url.split("/")[2]);
        const property = properties.find((p) => p.id === id);

        if (!property) {                       // ← DAKHL route, 9bel 200
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Property not found"}));
            return;
        }

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(property));
        return;
    }

    if (req.method === "POST" && req.url === "/properties"){
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const data = JSON.parse(body);
            const newProperty = {
                id: properties.length + 1,
                title: data.title,
                city: data.city,
                price: data.price,
            };
            properties.push(newProperty);

            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify(newProperty));
        });
        return;
    }

    // ay 7aja khra
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Not found"}));
});

server.listen(3000, () => {
    console.log("server khddam f http://localhost:3000");
});
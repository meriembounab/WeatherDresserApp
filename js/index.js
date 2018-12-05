var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end();

});

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });
   app.use("/getDressed.html", (req, res) => {
    res.sendFile("/getDressed.html");
   });


var port = process.env.PORT || 1337;

server.listen(port);

console.log("Server running at http://localhost:%d", port);

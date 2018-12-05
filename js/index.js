var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end();

});

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });
   app.use("/index.html", (req, res) => {
    res.sendFile("/index.html");
   });

   app.post("/getDressed.html", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("/getDressed.html");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
var port = process.env.PORT || 1337;

server.listen(port);

console.log("Server running at http://localhost:%d", port);

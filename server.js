var http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
app = express(),
port = process.env.PORT||3000;

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({extended: true}));

http.createServer(app).listen(port);
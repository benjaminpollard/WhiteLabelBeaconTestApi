var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const favicon = require('express-favicon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);
app.use(favicon(__dirname + '/favicon.png'));

var server = app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port %s...", server.address().port);
});

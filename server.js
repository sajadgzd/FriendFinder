var express = require("express");
var path = require("path");


//set up the express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app/public')));

// Handle data parsing in express app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);




// Listener
app.listen(PORT, function() {
    console.log("Listening on PORT: ", PORT);
});
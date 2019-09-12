//dependencies
var express = require("express");
var path = require("path")

//express configuration
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

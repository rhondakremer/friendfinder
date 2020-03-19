var path = require("path")

// // LOAD DATA
// var friendsData = require("../data/friends.js");


//routing
module.exports = function(app) {
  
    // API GET Requests
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
};
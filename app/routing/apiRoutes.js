// LOAD DATA
var friendsData = require("../data/friends.js");


//routing
module.exports = function(app) {
  
    // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    //code to compare current user with friends in friends.js
  });

  
};

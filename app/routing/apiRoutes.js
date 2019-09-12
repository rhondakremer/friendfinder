// LOAD DATA
var friendsData = require("../data/friends.js");


//routing
module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {

        // code to do matching
        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        };

        var userData =  req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (let i = 0; i < friendsArray.length; i++) {
            var currentFriend = friendsArray[i];
            var totalDifference = 0;
            //console.log(currentFriend.name)\
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                 totalDifference +=  Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));               
            }

            //if the sum of differences is less than the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                //reset the bestMatch to be the new friend
                bestMatch.name = currentFriend.name;
                //photo
                bestMatch.friendDifference = totalDifference;
            }
        }

        //push into array
        friendsArray.push(userData);

        //return a JSON with the user's bestMatch.
       res.json(bestMatch);
       
    });
};

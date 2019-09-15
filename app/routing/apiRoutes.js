// LOAD DATA
var friendsData = require("../data/friends");


//routing
module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        // code to do matching
        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        };

        var userData =  req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (let i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i];
            var totalDifference = 0;
            console.log(currentFriend.name)
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                //console.log(currentUserScore)
                 totalDifference +=  Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));  
                            
            }
            console.log(totalDifference)  
                
            //if the sum of differences is less than the differences of the current "best match"
            if (totalDifference <= bestMatch.difference) {
                //reset the bestMatch to be the new friend
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
                
            }
        }

        //push into array
        friendsData.push(userData);

        //return a JSON with the user's bestMatch.
       console.log("your best match is " + bestMatch.name)
       res.json(bestMatch);
       
    });
};

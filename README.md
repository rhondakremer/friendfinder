# friendfinder

This Friend Finder app implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). Upon submission the user's answers are compared to the answers of several possibles matches and the one with the closest answers to the user is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

The application is implemented using Node.js and an Express server.

Demo
Friend Finder is deployed to Heroku. Please check it out here: https://mysterious-sands-00699.herokuapp.com/
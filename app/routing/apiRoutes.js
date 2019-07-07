var friendsData = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res) {

        friendsData.push(req.body);
        var diffArray = [];
        var totalDifference = 0;

        for (let j = 0; j < friendsData.length - 1; j++) {
            totalDifference = 0;
            for (let i = 0; i < 10; i++) {
                totalDifference += Math.abs(parseInt(req.body.scores[i]) - parseInt(friendsData[j].scores[i]))
            }
            diffArray.push(totalDifference);
        }
        var matchIndex = 0;
        var min = diffArray[0];
        for (let i = 1; i < diffArray.length; i++) {
            if (diffArray[i] <= min) {
                min = diffArray[i];
                matchIndex = i;
            }
        }

        console.log(diffArray);
        res.json(friendsData[matchIndex]);

    })

}
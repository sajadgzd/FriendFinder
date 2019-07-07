var path = require("path");

module.exports = function(app) {
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });

    app.sendFile("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"));
    });
}
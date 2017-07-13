var fs = require("fs");

module.exports = basiccard;

function basiccard(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
        };
        fs.appendFile("logfile.txt", JSON.stringify(data) + ';', function(error) {
            if (error) {
                console.log(error);
            }
        });
    };
}
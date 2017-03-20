var Model = require('../model/model.js')
var Controller = function () {
    this.model = Model;
}
Controller.prototype = {
    add: function (data) {
        this.model.addData(data);
    }
}
module.exports = new Controller();
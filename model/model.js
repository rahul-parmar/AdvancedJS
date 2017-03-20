var Observer = require('../observer/observer.js');
var Model = function () {
    this.data = {};
    //debugger;
    this.dataAdded = new Observer();
}
Model.prototype = {
    addData: function (newData) {
        //debugger;
        this.data.address = newData;
        this.dataAdded.notify(this.data);
    }
}
module.exports = new Model();
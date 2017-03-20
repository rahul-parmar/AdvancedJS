var Controller = require('../controller/controller.js');
var Model = require('../model/model.js');
var View = function (elements) {
    this.elements = elements;
    this.model = Model;
    this.controller = Controller;
}
View.prototype = {
    init: function () {
        //debugger;
        var self = this;
        self.model.dataAdded.register(function (modelData) {
            self.render(modelData);
        })
        this.elements.checkBox.addEventListener('change', function () {
            var flag = self.elements.checkBox.checked;
            if (flag) {
                var city = self.elements.paymentAddress.elements['city'].value;
                var state = self.elements.paymentAddress.elements['state'].value;
                var data = {
                    city: city
                    , state: state
                };
                console.log(self.controller);
                self.controller.add(data);
            }
        })
    }
    , render: function (data) {
        var paymentAddress = data.address;
        this.elements.shippingAddress.elements['city'].value = paymentAddress.city;
        this.elements.shippingAddress.elements['state'].value = paymentAddress.state;
    }
}
module.exports = View;
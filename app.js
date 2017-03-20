var View = require('./view/view.js')
var elements = {
    checkBox: document.getElementById('checkBox')
    , shippingAddress: document.getElementById('shippingAddress')
    , paymentAddress: document.getElementById('paymentAddress')
}
var view = new View(elements);
view.init();
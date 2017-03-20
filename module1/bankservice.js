var Bank = function (balance) {
    this.balance = balance;
}
Bank.prototype = {
    withDraw: function (amount) {
        this.balance -= amount;
    }
    , getBalance: function (amount) {
        return this.balance;
    }
    , deposit: function (amount) {
        this.balance += amount;
    }
}
module.exports = Bank;
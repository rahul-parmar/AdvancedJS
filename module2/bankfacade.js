var Bank = require('../module1/bankservice.js')
var bank = new Bank(5000);
bank.deposit(10000.00);
bank.withDraw(2000.00);
console.log('Available Balance is: ' + bank.getBalance());
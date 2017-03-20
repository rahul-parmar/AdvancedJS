var myFunc = function (fn) {
        this.age = 20;
        var self = this;
        //setTimeout(fn, 1000);
        setTimeout(function () {
                console.log(self.age), 1000)
        };
        console.log("I am here 1")
    }
    /*myFunc(function () {
        console.log('i am here 2')
    })*/
new myFunc();
//console.log("homework week 5");
// var num1 = 2;
// var num2 = 32;
// var numTotal = num1+ num2;
// numTotal;
// console.log (numTotal);
// import cube from './exporthmwk5node.js'
// console.log(cube(3)); // 34'

// const learning = require('./exporthmwk5node');

// console.log (learning("rotimi"));

var myTime = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
        console.log(45);
    }, 5000);
});


function sayHello(){
    console.log("hello");
    return myTime;


}

sayHello();

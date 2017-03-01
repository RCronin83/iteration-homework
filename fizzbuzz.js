
function fizzBuzz(x) {
  let numbers = [];
    for (i=1; i<=x; i++){
    if (i % 15 === 0){
        numbers.push("FizzBuzz");
    }else if (i % 3 === 0){
        numbers.push("Fizz");
    }else if (i % 5 === 0){
        numbers.push("Buzz");
    }else{
        numbers.push(i);

  }
}
  console.log( numbers );
}
// console.log( numbers );




let testRunner = require('./fizzbuzz-tests.js');
testRunner(fizzBuzz);

let sonnets = require('./sonnets.js');




function wordFrequency(text){
  let words = text.split(' ');
  let frequency = {};

  words.forEach( function printOut(eachWord) {
    if (!frequency[eachWord]){
      frequency[eachWord] = 1;

    } else {
      frequency[eachWord] = frequency[eachWord] + 1;

    }

  });


  return frequency;
}

console.log(wordFrequency(sonnets));






let testRunner = require('./word-frequency-tests.js');
testRunner(wordFrequency);

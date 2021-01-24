/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

function smoothieMachine(...param1) {
  let recipie = ["I'm having a smoothie with"];
  let ingredients1 = [...param1];
  for (let i = 0; i < ingredients1.length; i++) {
    let ingredient = ingredients1[i];
    if (recipie.length >= 2) {
      recipie.push("and", ingredient)
    } else {
      recipie.push(ingredient)
    }
  }
  return function inner(...param2) {
    let ingredients2 = [...param2]
    for (let j = 0; j < ingredients2.length; j++) {
      let ingredient = ingredients2[j];
      if (recipie.length >= 2) {
        recipie.push("and", ingredient)
      } else {
        recipie.push(ingredient)
      }
      
    }
    return recipie.join(' ');
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}

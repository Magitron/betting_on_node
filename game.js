var prompt = require('sync-prompt').prompt;

var total = 100;
  
while (total > 0) {
var bet = prompt("How much money between $5-10 would you like to bet?");
  var number = Math.floor((Math.random() * 10) + 1);
  var guess = prompt("Guess a number between 1 and 10");



if (number === guess) {
    total += (+bet * 2);
    console.log("Correct! You have $" + total + " left");
} else if (Math.abs(number - +guess) === 1) {
    total += +bet;
    console.log("Close! The number was " + number + ". You have $" + total + " left");
} else {
   total -= +bet;
  console.log("Wrong! The number was " + number + ". You have $" + total + " left");
}
}

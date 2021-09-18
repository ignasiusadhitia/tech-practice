// ROCK, PAPER, SCISSORS GAME
/*
const jankenOptions = ["rock", "paper", "scissors"];
const computer = jankenOptions[Math.floor(Math.random() * 3)];

function rockPaperScissors(janken) {
  const match = `${janken} against ${computer}`;
  if (janken === computer) {
    console.log(`${match} - tie`);
  } else if (janken === "rock") {
    if (computer === "scissors") {
      console.log(`${match} - you win`);
    } else {
      console.log(`${match} - you lose`);
    }
  } else if (janken === "paper") {
    if (computer === "rock") {
      console.log(`${match} - you win`);
    } else {
      console.log(`${match} - you lose`);
    }
  } else if (janken === "scissors") {
    if (computer === "paper") {
      console.log(`${match} - you win`);
    } else {
      console.log(`${match} - you lose`);
    }
  } else if (typeof janken === "number") {
    console.log("please input rock, paper, or scissors only");
  } else {
    console.log(`${janken} is not part of the game!`);
  }
}

rockPaperScissors("rock");
rockPaperScissors("paper");
rockPaperScissors("scissors");
rockPaperScissors(1);
rockPaperScissors("nuclear");

*/

// =====================================================================================================

// CHANGE CALCULATOR

// console.log(calculateChange(700649, 800000));
// console.log(calculateChange(575650, 580000));
// console.log(calculateChange(657650, 600000));

// function calculateChange(amount, money) {
//   const change = money - amount;
//   return change;
// }

// console.log(calculateChange(700649, 800000));

function calculateChange(amount, money) {
  change = money - amount;
  console.log(change);
}

calculateChange(200, 100);

// function (amount, money) {

// 	var change = money-amount;

// 	var remaining = change * 100;

// 	var calcQuarter = Math.floor(remaining/25);
// 		remaining = remaining%25;

// 	var calcDime= Math.floor(remaining/10);
// 		remaining = remaining%10;

// 	var calcNickel = Math.floor(remaining/5);
// 		remaining = remaining%5;

// 	var calcPenny = Math.floor(remaining/1);
//   alert("\nThe total was $" + amount + " with " + "$"+ money + " tendered.\n\nPlease return $" + change.toFixed(2)  + ":  " + calcQuarter + " quarters, "  + calcDime + " dimes, " + calcNickel + " nickels, and " + calcPenny + " pennies, Thank you!");
// };

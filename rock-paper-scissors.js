// ROCK, PAPER, SCISSORS GAME

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


// =====================================================================================================

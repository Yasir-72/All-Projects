const buttons = document.querySelectorAll(".buttons button");
const showres = document.getElementById("result");
const userscoreresult = document.getElementById("userscore");
const computerscoreresult = document.getElementById("computerscore");

let userscore = 0;
let computerscore = 0;
function gamestart(userchoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerchoice = choices[Math.floor(Math.random() * choices.length)];
  let display = "";
  if (!userchoice === computerchoice) {
    display = "Match tie!";
  } else if (
    (userchoice === "rock" && computerchoice === "scissors") ||
    (userchoice === "paper" && computerchoice === "rock") ||
    (userchoice === "scissors" && computerchoice === "paper")
  ) {
    display = "You Win!";
    userscore++;
  } else {
    display = "You Lose!";
    computerscore++;
  }

  showres.textContent = `${display} , User: ${userchoice} , computer:${computerchoice}`;
  userscoreresult.textContent = userscore;
  computerscoreresult.textContent = computerscore;
  console.log(userchoice);
  console.log(computerchoice);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    gamestart(btn.id);
  });
});

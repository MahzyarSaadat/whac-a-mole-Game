const squares = document.querySelectorAll(".square");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("time-left");

let result = 0;
let hintPosition;
let timer = 10;
let timeId = null;

function randomSquare() {
  squares.forEach((square) => square.classList.remove("mole"));
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hintPosition = randomPosition.id;
}

squares.forEach((square) =>
  square.addEventListener("mousedown", () => {
    if (square.id === hintPosition) {
      result++;
      timer++;
      scoreDisplay.textContent = result;
      hintPosition = null;
    }
  })
);

function moveMole() {
  timeId = setInterval(randomSquare, 500);
}

moveMole();

function countDownTime() {
  timer--;
  timeLeftDisplay.textContent = timer;
  if (timer == 0) {
    clearInterval(timeId);
    clearInterval(countDownIntervalId);
    timeLeftDisplay.textContent = timer;
    alert("gameOver!");
  }
}

let countDownIntervalId = setInterval(countDownTime, 1000);

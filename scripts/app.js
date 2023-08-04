const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formEl = document.querySelector("form");
const errorOutputEl = document.getElementById("config-error");
const gameAreaEl = document.getElementById("active-game");
const activePlayerEl = document.getElementById("active-player-name");
const gameOverEl = document.getElementById("game-over");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const cancelConfBtn = document.getElementById("cancel-conf-btn");
const startNewGameBtn = document.getElementById("satrt-game-btn");
// const gameFieldEls = document.querySelectorAll("#game-board li");
const gameBoardEl = document.getElementById("game-board");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formEl.addEventListener("submit", sevePlayerConf);
startNewGameBtn.addEventListener("click", startNewGame);

// for (const gameFieldEl of gameFieldEls) {
//   gameFieldEl.addEventListener("click", selectGameField);
// }

gameBoardEl.addEventListener("click", selectGameField);

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Plaese set custom name for players");
    return;
  }
  restartGame();

  activePlayerEl.textContent = players[activePlayer].name;
  gameAreaEl.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerEl.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const selectedCol = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("please select an empty field");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerId = checkForGameOver();

  if (winnerId != 0) endGame(winnerId);

  currentRound++;

  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverEl.style.display = "block";

  if (winnerId > 0) {
    gameOverEl.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOverEl.firstElementChild.textContent = "It is a draw!";
  }
}

function restartGame() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  gameOverEl.firstElementChild.innerHTML =
    '<h2>You won <span id="winner-name">Player name</span>!';

  gameOverEl.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardEl.children[gameBoardIndex].textContent = "";
      gameBoardEl.children[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

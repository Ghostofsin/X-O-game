function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerId;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formEl.firstElementChild.classList.remove("error");
  errorOutputEl.textContent = "";
  formEl.firstElementChild.lastElementChild.value = "";
}

function sevePlayerConf(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlaerName = formData.get("playername").trim();
  if (!enteredPlaerName) {
    event.target.firstElementChiid.classList.add("error");
    errorOutputEl.textContent = "please enter valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlaerName;

  //   if (editedPlayer === 1) {
  //     players[0].name = enteredPlaerName;
  //   } else {
  //     players[1].name = enteredPlaerName;
  //   }

  players[editedPlayer - 1].name = enteredPlaerName;

  closePlayerConfig();
}

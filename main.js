var plyrOneInput = document.querySelector("#plyr-1-input");
var plyrTwoInput = document.querySelector("#plyr-2-input");
var playBtn = document.querySelector("#play-game-btn");
var greeting = document.querySelector("article");
var form = document.querySelector(".form-container");
var playerGreeting = document.querySelector(".plyr-greeting");
var gameBoard = document.querySelector("main");

window.addEventListener('load', playDisableToggle);
plyrOneInput.addEventListener('keyup', playDisableToggle);
plyrTwoInput.addEventListener('keyup', playDisableToggle);
playBtn.addEventListener('click', startGame);


function playDisableToggle() {
  if (plyrOneInput.value && plyrTwoInput.value) {
    playBtn.disabled = false;
    playBtn.style.color = '#000000';
    playBtn.style.cursor = 'pointer';
  } else {
    playBtn.disabled = true;
    playBtn.style.color = '#7a7a7a';
    playBtn.style.cursor = 'not-allowed';
  }
}

function startGame() {
  if(greeting.style.display === "flex") {
    loadGame()
    // start game
    console.log("game start")
  } else {
    loadGreeting();
  }
}

function loadGame() {
  greeting.style.display = "none";
  gameBoard.style.display = "grid"
  playBtn.style.display = "none";
}

function loadGreeting() {
  greeting.style.display = "flex";
  form.style.display = "none";
  insertGreeting();
}

function insertGreeting() {
  playerGreeting.innerText = `WELCOME ${plyrOneInput.value.toUpperCase()} AND ${plyrTwoInput.value.toUpperCase()}!`;
}

var plyrOneInput = document.querySelector("#plyr-1-input");
var plyrTwoInput = document.querySelector("#plyr-2-input");
var playBtn = document.querySelector("#play-game-btn");
var greeting = document.querySelector("article");
var form = document.querySelector(".form-container");
var playerGreeting = document.querySelector(".plyr-greeting");
var gameBoard = document.querySelector("main");
var cards = document.querySelectorAll('.memory-card');
// var hasFlippedCard = false;

window.addEventListener('load', playDisableToggle);
plyrOneInput.addEventListener('keyup', playDisableToggle);
plyrTwoInput.addEventListener('keyup', playDisableToggle);
playBtn.addEventListener('click', startGame);
cards.forEach(card => card.addEventListener('click', flipCardUp));
var hasFlippedCard = false;
var firstCard, secondCard;

function flipCardUp() {
  this.classList.add('flip');
  if(!hasFlippedCard) {
  hasFlippedCard = true;
  firstCard = this;
  return;
}
  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  if(firstCard.dataset.breed === secondCard.dataset.breed) {
    removeMatchCards();
    return;
  }
  unflipCards();
}

function unflipCards() {
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
}, 1500);
}

function removeMatchCards() {
  setTimeout(() => {
    firstCard.classList.add("card-match");
    secondCard.classList.add("card-match");
}, 1200);
}

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

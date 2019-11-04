var cards = document.querySelectorAll('.memory-card');
var congratsMsg = document.querySelector("#congrats-msg")
var congratsPg = document.querySelector('#congrats-page')
var form = document.querySelector(".form-container");
var gameBoard = document.querySelector("main");
var greeting = document.querySelector("article");
var matchCount = document.querySelector('.matches')
var playBtn = document.querySelector("#play-game-btn");
var playerGreeting = document.querySelector(".plyr-greeting");
var plyrOneInput = document.querySelector("#plyr-1-input");
var plyrOneName = document.querySelector(".plyr-one-name");
var plyrTwoInput = document.querySelector("#plyr-2-input");
var plyrTwoName = document.querySelector(".plyr-two-name");

window.addEventListener('load', playDisableToggle);
plyrOneInput.addEventListener('keyup', playDisableToggle);
plyrTwoInput.addEventListener('keyup', playDisableToggle);
playBtn.addEventListener('click', startGame);
cards.forEach(card => card.addEventListener('click', flipCardUp));
var hasFlippedCard = false;
var firstCard, secondCard;
var twoFlipped = false;
var matchCounter = 0;

function insertGreeting() {
  playerGreeting.innerText = `WELCOME ${plyrOneInput.value.toUpperCase()} AND ${plyrTwoInput.value.toUpperCase()}!`;
}

function loadGreeting() {
  greeting.style.display = "flex";
  form.style.display = "none";
  insertGreeting();
}

function loadGame() {
  greeting.style.display = "none";
  gameBoard.style.display = "grid"
  playBtn.style.display = "none";
}

function startGame() {
  if(greeting.style.display === "flex") {
    loadGame()
    plyrOneName.innerText = plyrOneInput.value;
    plyrTwoName.innerText = plyrTwoInput.value;
  } else {
    loadGreeting();
  }
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

function flipCardUp() {
  if (twoFlipped) return;
  if (this === firstCard) return;
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

function unflipCards() {
  twoFlipped = true;
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  twoFlipped = false;
}, 1500);
}

function checkForMatch() {
  if(firstCard.dataset.breed === secondCard.dataset.breed) {
    removeMatchCards();
    matchCounter++;
    matchCount.innerText = matchCounter;
    return;
  }
  unflipCards();
}

function removeMatchCards() {
  twoFlipped = true;
  setTimeout(() => {
    firstCard.classList.add("card-match");
    secondCard.classList.add("card-match");
    twoFlipped = false;
    endGameCheck()
}, 1200);
}

function endGameCheck() {
  if (matchCounter === 5) {
    console.log("end game")
    gameBoard.style.display = "none";
    congratsPg.style.display = "initial";
    congratsMsg.innerText = `CONGRATULATIONS! ${plyrOneInput.value} WINS!!!`;
  }
}

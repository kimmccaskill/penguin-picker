var congratsMsg = document.querySelector("#congrats-msg")
var congratsPg = document.querySelector('#congrats-page')
var form = document.querySelector(".form-container");
var gameBoard = document.querySelector("main");
var cardContainer = document.querySelector(".card-container")
var greeting = document.querySelector("article");
var matchCount = document.querySelector('.matches')
var playBtn = document.querySelector("#play-game-btn");
var playerGreeting = document.querySelector(".plyr-greeting");
var plyrOneInput = document.querySelector("#plyr-1-input");
var plyrOneName = document.querySelector(".plyr-one-name");
var plyrTwoInput = document.querySelector("#plyr-2-input");
var plyrTwoName = document.querySelector(".plyr-two-name");
var timeResults = document.getElementById("time-results");
var userArray = JSON.parse(localStorage.getItem("userArray")) || [];
var seconds = 0;
var minutes = 0;
var interval;
var deck = new Deck();
// var userArray = [];
var firstCard, secondCard;

window.addEventListener('load', playDisableToggle);
window.addEventListener('load', createCard);
plyrOneInput.addEventListener('keyup', playDisableToggle);
plyrTwoInput.addEventListener('keyup', playDisableToggle);
playBtn.addEventListener('click', startGame);

function addPlyr() {
  var user = new Player({
    id: Date.now(),
    name: plyrOneInput.value,
    time: `${minutes} min and ${seconds} sec`,
  });
  userArray.push(user);
  user.saveToStorage(userArray);
}

function createCard() {
  var card = new Card();
  var num = 1;
  instantiateCard();
  for(var i = 0; i < deck.cards.length; i++) {
  cardContainer.innerHTML += `
  <div class="memory-card card${num++}" data-breed="${deck.cards[i].matchInfo}" data-id=${deck.cards[i].id}>
    <img class="front-face" src="./assets/${deck.cards[i].matchInfo}-peng.jpg" alt="${deck.cards[i].matchInfo} Penguin">
    <img class="back-face" src="./assets/peng-icon.svg" alt="Memory Card">
  </div>`;
  document.querySelectorAll('.memory-card').forEach(card => card.addEventListener('click', flipCardUp));
  };
}

function instantiateCard() {
  var data = ['afric', 'afric', 'chin', 'chin', 'emp', 'emp', 'little', 'little', 'mac', 'mac'];
  for (var i =0; i < data.length; i++) {
    var card = new Card(data[i], i);
    deck.cards.push(card);
    }
  // deck.shuffle(deck.cards);
}

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
  gameBoard.style.display = "grid";
  playBtn.style.display = "none";
}

function startGame() {
  if(greeting.style.display === "flex") {
    loadGame()
    plyrOneName.innerText = plyrOneInput.value;
    plyrTwoName.innerText = plyrTwoInput.value;
    // user['name'] = plyrOneInput.value;
    // addPlyr()
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
function flipCardUp(event) {
  timer();
  var clickedId = parseInt(event.target.parentNode.dataset.id);
  if (deck.selectedCards.length === 2) return;
  if (this.classList.contains('flip')) return;
  this.classList.add('flip');
  if(!deck.selectedCards[0]) {
    firstCard = this;
    deck.selectCard(clickedId);
    return;
  }
  secondCard = this;
  deck.selectCard(clickedId);
  checkForMatch();
}

function timer() {
  var firstMove = 0;
  firstMove++;
  if(firstMove === 1) {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
  }
  console.log('timer')
}

function startTimer() {
  seconds++;
  if(seconds > 59) {
    seconds = 0;
    minutes++;
  }
  timeResult();
}

function timeResult() {
  if(minutes === 0) {
  timeResults.innerHTML = `It took you ${seconds} seconds!`;
  } else{
  timeResults.innerHTML = `It took you ${minutes} minute and ${seconds} seconds!`;
  }
  // user.time = `${minutes} min and ${seconds} sec`;
  // user[time] = `${minutes} min and ${seconds} sec`;
}

function unflipCards() {
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  deck.checkSelectedCards()
}, 1500);
}

function checkForMatch() {
  if(firstCard.dataset.breed === secondCard.dataset.breed) {
    removeMatchCards();
    return;
  }
  unflipCards();
}

function updateMatches() {
  if(deck.matches > 0) {
    matchCount.innerHTML = deck.matches;
  }
}

function removeMatchCards() {
  setTimeout(() => {
    firstCard.classList.add("card-match");
    secondCard.classList.add("card-match");
    deck.checkSelectedCards();
    updateMatches();
    endGameCheck();
}, 1200);
}

function endGameCheck() {
  if (deck.matches === 5) {
    console.log("end game")
    clearInterval(interval);
    addPlyr();
    gameBoard.style.display = "none";
    congratsPg.style.display = "initial";
    congratsMsg.innerText = `CONGRATULATIONS! ${plyrOneInput.value} WINS!!!`;
  }
};

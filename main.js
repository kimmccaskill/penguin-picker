var plyrOneInput = document.querySelector("#plyr-1-input");
var playBtn = document.querySelector("#play-game-btn");
var greeting = document.querySelector("article");
var form = document.querySelector(".form-container");

window.addEventListener('load', playDisableToggle);
plyrOneInput.addEventListener('keyup', playDisableToggle);
playBtn.addEventListener('click', loadGreeting);

function playDisableToggle() {
  if (plyrOneInput.value) {
    playBtn.disabled = false;
    playBtn.style.color = '#000000';
    playBtn.style.cursor = 'pointer';
  } else {
    playBtn.disabled = true;
    playBtn.style.color = '#7a7a7a';
    playBtn.style.cursor = 'not-allowed';
  }
}

function loadGreeting() {
  greeting.style.display = "flex";
  form.style.display = "none";
}

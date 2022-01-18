const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
const winner = document.querySelector(".winner");
const winningScoreSelect = document.querySelector("#winningScoreSelect");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;


p1Button.addEventListener('click', function() {
  p1Score++;
  if(p1Score == winningScore) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    p1Button.style.cursor = "not-allowed";
    p2Button.style.cursor = "not-allowed";
    resetButton.textContent = 'Play again';
    p1ScoreDisplay.style.color = "green";
    p2ScoreDisplay.style.color = "red";
    winner.textContent = "Player1 wins!!!";
    winner.style.display = "block";
  }
  p1ScoreDisplay.textContent = p1Score;
})

p2Button.addEventListener('click', function() {
  p2Score++;
  if(p2Score == winningScore) {
    p2Button.disabled = true;
    p1Button.disabled = true;
    p1Button.style.cursor = "not-allowed";
    p2Button.style.cursor = "not-allowed";
    resetButton.textContent = 'Play again';
    p1ScoreDisplay.style.color = "red";
    p2ScoreDisplay.style.color = "green";
    winner.textContent = "Player2 wins!!!";
    winner.style.display = "block";
  }
  p2ScoreDisplay.textContent = p2Score;
})

winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
})

const reset = () => {
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Button.style.cursor = "pointer";
  p2Button.style.cursor = "pointer";
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = 0;
  p2ScoreDisplay.textContent = 0;
  winner.style.display = "none";
  resetButton.textContent = 'Reset game';
  p1ScoreDisplay.style.color = "black";
    p2ScoreDisplay.style.color = "black";
}
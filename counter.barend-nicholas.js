let header, plus, minus;
let score = 0;
let scoreMax = 10;
let scoreMin = -10;

document.addEventListener("DOMContentLoaded", init);

function init() {
  header = document.getElementById("headerDisplay");
  plus = document.getElementById("plusButton");
  minus = document.getElementById("minusButton");
  plus.addEventListener("click", increment);
  // If minus is clicked = startingpoint - 1 = update score
  minus.addEventListener("click", decrement);
}

updateScore();

function toggleButton(button, condition) {
  button.disabled = condition;
}

function increment() {
  if (score < scoreMax) {
    toggleButton(plus, false);
    toggleButton(minus, false);
    //console.log(score);
    score++;
    //console.log(score);
    // updateScore();
    updateScore(header, score);
  } else {
    plus.disabled = true;
  }
}

function decrement() {
  if (score > scoreMin) {
    toggleButton(plus, false);
    toggleButton(minus, false);
    //console.log(score);
    score--;
    //console.log(score);
    updateScore(header, score);
    // updateScore();
  } else {
    minus.disabled = true;
  }
}

// self contain function (output depends only on the inputs)
function updateScore(domElement, myscore) {
  domElement.innerHTML = myscore;
}

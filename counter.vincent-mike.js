// Get access to an element in JavaScript DOM
let score, min, plus, input;
let count = 0;
let step = 1;

// DOM initialization
document.addEventListener("DOMContentLoaded", init);
function init() {
  score = document.getElementById("score");
  min = document.getElementById("min");
  plus = document.getElementById("plus");
  input = document.getElementById("input");
  input.addEventListener("click", updateStep);
  min.addEventListener("click", decrease);
  plus.addEventListener("click", increase);
}

function updateStep(event) {
  step = parseInt(event.target.value);
}

function decrease() {
  count = count - step;
  updateScore();
  plus.disabled = false;
}

function increase() {
  count = count + step;
  updateScore();
  min.disabled = false;
}

// Writing functions
function updateScore() {
  score.innerHTML = count;
  if (count >= 10) {
    plus.disabled = true;
  } else if (count <= -10) {
    min.disabled = true;
  }
}

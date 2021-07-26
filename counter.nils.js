let decreaseBTN, increaseBTN;
let startnumber = 0;

document.addEventListener("DOMContentLoaded", init);
function init() {
  decreaseBTN = document.getElementById("decrease");
  increaseBTN = document.getElementById("increase");
  increaseBTN.addEventListener("click", increase);
  decreaseBTN.addEventListener("click", decrease);
}

function increase() {
  startnumber++;
  updateDom(startnumber);
}

function decrease() {
  startnumber--;
  updateDom(startnumber);
}

function toggleElement(el, condition) {
  el.disabled = condition;
}

function updateDom(value) {
  document.getElementById("number").innerHTML = value;
  toggleElement(decreaseBTN, startnumber === -10);
  toggleElement(increaseBTN, startnumber === 10);
}

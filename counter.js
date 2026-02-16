const counterValue = document.getElementById("counterValue");
const incButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const decButton = document.getElementById("decrease");

let count = 0;

incButton.onclick = function() {
    count++;
    counterValue.textContent = count;
}
resetButton.onclick = function() {
    count = 0;
    counterValue.textContent = count;
}
decButton.onclick = function() {
    count--;
    counterValue.textContent = count;
}

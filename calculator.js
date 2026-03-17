const display = document.getElementById("display");

function displayAppend(input) {
    display.value += input;
}

function displayClear(input) {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error"
    }
}

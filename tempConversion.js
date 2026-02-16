const toCelsius = document.getElementById("toCelsius")
const toFahrenheit = document.getElementById("toFahrenheit");
const inputTemp = document.getElementById("inputTemp");
const outputTemp = document.getElementById("outputTemp");

function handleConversion() {

    let outputValue;
    
    if (inputTemp.value === "" || isNaN(Number(inputTemp.value))) {
        outputValue = "Please input a valid number";
        outputTemp.textContent = outputValue;
    } 
    else if (toCelsius.checked) {
        outputValue = ((Number(inputTemp.value) - 32) * (5/9)).toFixed(1);
        outputTemp.textContent = outputValue.toString() + " °C";
    }
    else if (toFahrenheit.checked) {
        outputValue = (Number(inputTemp.value) / (5/9) + 32).toFixed(1);
        outputTemp.textContent = outputValue.toString() + " °F";
    }
    else {
        outputValue = "Please select a conversion method";
        outputTemp.textContent = outputValue;
    }

}

document.getElementById("submitButton").onclick = handleConversion;

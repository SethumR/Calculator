function clearDisplay() {
    document.calc.displayed.value = "";
}

function deleteLast() {
    document.calc.displayed.value = document.calc.displayed.value.slice(0, -1);
}

function appendValue(value) {
    document.calc.displayed.value += value;
}

function calculate() {
    try {
        document.calc.displayed.value = eval(document.calc.displayed.value);
    } catch (error) {
        document.calc.displayed.value = "Error";
    }
}

"use strict";
function appendToResult(value) {
    const result = document.getElementById("result");
    result.value += value;
}
function calculateResult() {
    const result = document.getElementById("result");
    result.value = eval(result.value);
}
function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
}

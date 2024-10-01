function appendToResult(value: string) {
  const result = document.getElementById("result") as HTMLInputElement;
  result.value += value;
}

function calculateResult() {
  const result = document.getElementById("result") as HTMLInputElement;
  result.value = eval(result.value);
}

function clearResult() {
  const result = document.getElementById("result") as HTMLInputElement;
  result.value = "";
}

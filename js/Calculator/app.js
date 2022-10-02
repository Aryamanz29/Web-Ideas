document.getElementById("clearButton").addEventListener("click", deleteValue);
function deleteValue() {
  let k = confirm("Your value wil be deleted");
  let calc = document.getElementById("display");
  if (k == true) {
    calc.value = "";
  }
}

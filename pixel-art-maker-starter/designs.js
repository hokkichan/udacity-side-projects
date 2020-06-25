const $colorPicker = document.getElementById("colorPicker");
const $sizePicker = document.getElementById("sizePicker");
const $table = document.getElementById("pixelCanvas");

function setGrid() {
  event.preventDefault();
  let width = document.getElementById("inputWidth").value;
  let height = document.getElementById("inputHeight").value;
  makeGrid(width, height);
}

function makeGrid(width, height) {
  var row = $table.insertRow(-1);
  var cell = row.insertCell(-1);
}






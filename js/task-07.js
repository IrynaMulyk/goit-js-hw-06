// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const slider = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

output.style.fontSize = slider.value;

function changeSize() {
  output.style.fontSize = this.value + "px";
}

slider.addEventListener("input", changeSize);

// друга версія
// slider.oninput = function () {
//   output.style.fontSize = this.value + "px";
// };

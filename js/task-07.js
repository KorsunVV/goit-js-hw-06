// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputElement = document.querySelector("#font-size-control");
console.log(inputElement.value);
const textInput = document.querySelector("#text");
inputElement.addEventListener("input", onInputChange);
function onInputChange(event) {
textInput.style.fontSize = inputElement.value + "px"
}
textInput.style.fontSize = inputElement.value + "px"
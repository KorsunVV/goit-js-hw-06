// Напиши скрипт создания и очистки коллекции элементов.Пользователь
// вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputVal: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxDiv: document.querySelector("#boxes"),
};
console.log(refs.inputVal.value);
console.log(refs.inputVal);
console.log(refs.createBtn);
console.log(refs.destroyBtn);
console.log(refs.boxDiv);

let boxQuantity = 0;

refs.inputVal.addEventListener("input", (e) => {
  boxQuantity = refs.inputVal.value;
  console.log(boxQuantity);
  return boxQuantity;
});

refs.createBtn.addEventListener("click", onCreateBoxes);

function onCreateBoxes() {
  let stringAll = ``;
  console.log(stringAll);
  console.log(boxQuantity);
  for (let i = 1; i <= boxQuantity; i += 1) {
    stringAll += `<div style="background-color:${getRandomHexColor()}; width:${
      20 + i * 10
    }px; height:${20 + i * 10}px"></div>`;
  }
  console.log(stringAll);
  refs.boxDiv.innerHTML = stringAll;
}

refs.destroyBtn.addEventListener("click", () => {
  refs.boxDiv.innerHTML = "";
});
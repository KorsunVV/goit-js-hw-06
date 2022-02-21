// Напиши скрипт, который для каждого элемента массива ingredients:

// 1)Создаст отдельный элемент < li >.Обзательно используй метод document.
//   createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.






const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingred = document.querySelector('#ingredients')
const elemIngrid = ingredients.map((ingridient) => {
  const itemIngrid = document.createElement('li')
  itemIngrid.textContent = ingridient;
  itemIngrid.classList.add('ingridient');
  return itemIngrid
})
ingred.append(...elemIngrid); 
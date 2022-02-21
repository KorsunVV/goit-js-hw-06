// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// есть элементов li.item. Для каждого элемента li.item в списке
// ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех
// вложенных в него < li >).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesItem = document.querySelector('#categories')
console.log("Number of categorie: ", categoriesItem.children.length);
const arrItem = document.querySelectorAll(".item");
arrItem.forEach(item => { 
    console.log("Category: ", item.firstElementChild.textContent);
    const lengthItemNum = item.querySelectorAll("li");
    console.log("Elements: ", lengthItemNum.length
)})
















// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.



const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUl = document.querySelector("ul.gallery");

const imagesElem = (images) => {
  return images.map(({ url, alt }) => {
    const indexString = `<li class="item-img"><img src=${url} alt=${alt} width="300" height="200"></li>`;
    return indexString;
  });
};
console.log(imagesElem);
const li = imagesElem(images).join("");
console.log(li);
galleryUl.insertAdjacentHTML("beforeend", li);

galleryUl.style.display = "flex";
galleryUl.style.justifyContent = "space-around";
galleryUl.style.listStyle = "none";
console.log(galleryUl);
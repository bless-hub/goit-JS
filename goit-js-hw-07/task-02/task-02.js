const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addList = document.querySelector('#ingredients');
console.log(addList);
const createElem = elem => {
  const addList = document.createElement('li');
  addList.textContent = elem;
  return addList;
};
const refList = ingredients.map(elem => createElem(elem));
addList.append(...refList);

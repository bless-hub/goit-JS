const selectedCategories = document.querySelector('#categories');
console.log(`В СПИСКЕ ${selectedCategories.childElementCount} КАТЕГОРИЙ`);

const items = document.querySelectorAll('.item');
items.forEach(elem => {
  console.log(
    `${elem.firstElementChild.textContent}: количество элементов ${elem.lastElementChild.childElementCount}`,
  );
});

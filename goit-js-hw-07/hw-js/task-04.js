const valueRef = document.querySelector('#value');
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const value = function(value) {
  valueRef.textContent = value;
};

decrementBtn.addEventListener('click', () => {
  counterValue = counterValue - 1;
  return value(counterValue);
});

incrementBtn.addEventListener('click', () => {
  counterValue = counterValue + 1;
  return value(counterValue);
});

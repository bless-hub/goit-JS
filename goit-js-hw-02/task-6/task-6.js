let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число', '0');
  if (input === null) break;
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Необходимо ввести число');
  } else {
    numbers.push(input);
  }
}
if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Сумма чисело равна ${total}`);
}

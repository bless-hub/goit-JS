let input = +prompt("Введите число", "");
let total = 0;
while (input) {
  total += input;
  input = +prompt("Введите еще число", "");
}
alert(`Общая сумма чисел равна ${total}`);

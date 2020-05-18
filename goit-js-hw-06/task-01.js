// const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.lenght; i += 1) {
//   console.log(numbers.push[i]);
// }
// console.log(numbers);

// numbers.forEach(num => console.log(num));

// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const person = {
//   name: 'vasys',
//   family: 'string',
// };
// console.log(`меня зовут ${person.name} and `);

// const pow = Math.pow(2, 53) - 1;
// console.log(pow);

// const num = 0.4 + 0.2;
// console.log(+num.toFixed(1));

function getName(name) {
  return function(lastName) {
    console.log(name + lastName);
  };
}

const logWithName = getName('Vlad');
console.log(logWithName('vlad'));
console.log(logWithName('petya'));

console.log('provet');

const text = 'privet ya javascript';
const reversText = text.split(' ').reverse();
console.log(reversText);

'use strict';
// =======================task-1=======================================

console.log('=============TASK-1=============');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}; ${value}`);
}

// =======================task-2=======================================
console.log('=============TASK-2=============');

const countProps = function(obj) {
  return Object.keys(obj).length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// =======================task-3=======================================
console.log('=============TASK-3=============');

const findBestEmployee = function(employees) {
  let max = 0;
  let bestEmployee = null;

  for (const [name, value] of Object.entries(employees)) {
    if (max < value) {
      max = value;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

// =======================task-4=======================================
console.log('=============TASK-4=============');

const countTotalSalary = function(employees) {
  let total = 0;
  for (const employee in employees) {
    total += employees[employee];
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

// =======================task-5=======================================
console.log('=============TASK-5=============');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  const values = [];

  for (const item of arr) {
    let value = item[prop];

    if (value != undefined) {
      values.push(value);
    }
  }

  return values;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

// =======================task-6=======================================
console.log('=============TASK-6=============');

const productsTask6 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
  let total = 0;

  for (const item of allProducts) {
    let name = item.name;
    if (productName === name) {
      total += item.price * item.quantity;
    }
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(productsTask6, 'Радар')); // 5200

console.log(calculateTotalPrice(productsTask6, 'Дроид')); // 2800

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(Object.keys);

// const _id = {
//   js: 24,
//   $$_$$: true,
//   ...{ name: 'Mango', age: 2 },
//   ...{ age: 7, isOnline: false },
// };
// console.log(Object.values(_id));

// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object);
// Перебор ключей объекта hotel
// for (const pey in hotel) {
//   console.log('pey: ', pey);
// }

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// user.car = 'toyota';
// console.log(user.name);

// user.name = 'kiwi';
// console.log(user.name);
// console.log(user.car);
// delete user.name;
// console.log(user);
// console.log(user.mobile);
// const client = ['vlad', 'lena', 'petya', 'ira'];
// console.log(client.join('-'));
// console.log(client.includes('vlad'));

// const redFruit = ['apple', 'malina', 'arbuz'];
// const fruit = 'apple';
// if (redFruit.includes('apple')) {
//   console.log('est takoy');
// }

// // const parni = ['oleg', 'anton', 'vlad', 'petya', 'migran'];
// // parni.push('azar4ik', 3);
// // console.log(parni);
// const parni = ['oleg', 'anton', 'vlad', 'petya', 'migran'];
// const parni2 = ['lol', 'bite', 'kiskis'];

// const allparni = parni.concat(parni2);
// console.log(allparni);

// //console.log(parni.slice(1, 3));
// // parni.splice(0, 3);
// // console.log(parni);

// // parni.splice(2, 2, 'papa', 'mama');
// // console.log(parni);

// // const allparni = parni.concat(parni2)
// // console.log.(allparni)

// const fnA = function() {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function() {
//   console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');

// const sum = function() {
//   let total = 0;
//   for (const number of arguments) {
//     total += number;
//   }
//   return total;
// };
// console.log(sum(5, 2));

// const value = 50;
// const add = function(num) {
//   parametr1 = 10;
//   parametr2 = 20;

//   return num + parametr1 + parametr2;
// };
// console.log(value);
// console.log(add(100));
// console.log('Этого сообщения не будет в консоли.');

// cos value = 5;
// const comon = [12, 22, 1515, 4, 55, 3, 555];
// const maxComon = Math.max(...comon);
// console.log(maxComon);

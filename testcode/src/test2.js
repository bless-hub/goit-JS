import './styles.css';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const logItems = array => {
  return console.log(array.map((elem, ind) => elem * ind));
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

const calculateEngravingPrice = function(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

const findLongestWord = function(str) {
  return str.split(' ').sort((a, b) => a.length - b.length);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

console.log('sdfsdf');

const formatString = function(string) {
  if (string.length >= 40) return string.slice(0, 40) + '...';
  if (string.length <= 40) return string;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

const checkForSpam = function(message) {
  return message.toLowerCase().includes('sale') || message.includes('spam');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

const y = 10;
const x = 20;
console.log(y % x);

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется
//  в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока
//  пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//  необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//   Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор
//  символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай aler
//  t с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt
//  записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести
//   число в prompt.

const counter = function() {
  let count = 1;
  return () => count++;
};
let c1 = counter();
let c2 = counter();
console.log(c1());
console.log(c1());
console.log(c2());
console.log(c2());

let counters = 0;

while (counter < 10) {
  console.log('counter: ', counters);
  counter += 1;
}
console.log(counters);

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length <= 4 && login.length >= 16) {
    return login;
  }
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  } else logins.push(login);
  return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
for (const key in user) {
  console.log(user[key]);
}

console.log(user.name);
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

console.log(Object.entries(user));

const countProps = function(obj) {
  return Object.keys(obj).length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3s

const findBestEmployee = function(employees) {
  const key = Object.keys(employees);
  const maxValue = Math.max.apply(null, key);
  return maxValue;
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

const countTotalSalary = function(employees) {
  return Object.values(employees).reduce(
    (acc, employees) => acc + employees,
    0,
  );
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

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  return Object.values(...products);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

const productss = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(productss, 'Радар')); // 5200

console.log(calculateTotalPrice(productss, 'Дроид')); // 2800

// const items = ['item1', 'item2', 'item3'];
// const copy = [];
const pushItem = function() {
  return items.forEach(item => copy.push(item));
};

const Account = function(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`${this.login}and ${this.email}`);
};

const mango = new Account('Mangozedog', 'mango@dog.woof');

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');

poly.getInfo(); // Login: Poly, Email: poly@mail.com

const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(animal.entries);

function Human(name, age, male) {
  this.name = name;
  this.age = age;
  this.male = male;
}

Human.prototype.sayHello = function() {
  console.log('SAYHALLO');
};

const vlad = new Human('vlad', 22, 'man');
console.log(vlad);
vlad.sayHello();

const bob = new Human('bob', 23, 'man');
console.log(bob);
bob.sayHello();

function Doctor(name, age, male, robe) {
  Human.call(this, name, age, male);
  this.robe = robe;
}
Doctor.prototype = Object.create(Human.prototype);

const doctor = new Doctor('house', 55, 'man', 'white');
console.log(doctor);

doctor.sayHello();

// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(`user ${this.name} and ${this.age} and ${this.followers}`);
//   }
// }
// const mango = new User('Mango', 2, 20);

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User('Poly', 3, 17);

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();

console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str += this._value;
  }
  pad(str) {
    this._value = str += this._value += str;
  }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

class Car {
  static getSpecs(car) {
    console.log(
      `maxspeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`,
    );
  }
  /*
     * Добав
     ь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor(car) {
    this._speed = 0;
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }
  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this._isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this._isOn = false;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    let newSpeed = this._speed + value;
    if (newSpeed <= this._newSpeed) {
      this._speed = newSpeed;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    let newSpeed = this.speed - value;
    if (newSpeed >= 0) {
      this.speed = newSpeed;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

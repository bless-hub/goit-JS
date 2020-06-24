import users from './usersa.js';

// const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.lenght; i += 1) {
//   console.log(numbers.push[i]);
// }
// console.log(numbers);

// numbers.forEach(num => console.log(num));

// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

const person = {
  name: 'vasys',
  family: 'string',
};
console.log(`меня зовут ${person.name} and `);

const pow = Math.pow(2, 53) - 1;
console.log(pow);

const num = 0.4 + 0.2;
console.log(+num.toFixed(1));

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

const friendsInTelegram = ['pasha', 'andriy', 'kostya', 'vlad'];
const sayJokeAndriy = function() {
  if ((joke = false)) {
    console.log(friendsInTelegram[1]);
  }
};
console.log(friendsInTelegram);

console.log('haha');

let zak = function() {
  this.name = 'lalala';
};
console.log(zak);

const massv = function(arr, value) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i] * value;
  }
};
// const mass = [1, 2, 3, 4, 5];

const mass = [1, 3, 5, 8, 11, 20];
const copy = [50];
mass.forEach(function(arr, index, massive) {
  copy.push(arr);
});
console.log(mass);

const items = ['item1', 'item2', 'item3'];
const copys = [];
console.log(items);
// до
for (let i = 0; i < items.length; i++) {
  copys.push(items[i]);
}
console.log(items);
// после
items.forEach(function(item) {
  copys.push(item);
});
console.log(items);

// методы перебора массива

const numbers = [
  { 3: 2, 2: 2, 2: 2, 2: 2, 2: 2, 52: 2 },
  { 22: 2, 32: 2, 42: 2, 22: 2, 62: 2, 552: 2 },
];
numbers.map(function(user) {
  console.log(user);
});
console.log('==========================');
const preNumbers = numbers.map(function(element) {
  return element * 2;
});
console.log(preNumbers);
console.log(numbers);

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

const getUserNames = function(users) {
  return users.map(function(user) {
    return (user = user.name);
  });
};
console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUserNames = users => {
//   return users.map(user => user.name);
// };
// console.log(getUserNames(users));

const getUsersWithEyeColor = function(users, color) {
  return users.filter(function(user) {
    return (user = user.eyeColor === color);
  });
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  return users.filter(function(user) {
    return (user = user.gender === gender);
  });
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
  return users.filter(function(user) {
    return (user = !user.isActive);
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  return users.find(function(user) {
    return (user = user.email === email);
  });
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
  return users.reduce((acc, value) => acc + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user['friends'].includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = (users, friendName) => {
  return users.sort((a, b) => a.friends.length - b.friends.length);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getNamesSortedByFriendsCount = users => {
//   const usersSorted = (a, b) => a.friends.length - b.friends.length;

//   return users.sort(usersSorted).map(user => user.name);
// };

const getSortedUniqueSkills = users => {
  const userSkills = users.reduce(function(skills, user) {
    skills.push(...user.skills);
    return skills;
  }, []);
  return userSkills
    .sort()
    .filter((skill, idx) => userSkills.indexOf(skill) == idx);
};

console.log(getSortedUniqueSkills(users));

function sayText(from, text) {
  return 'from' + text;
}
sayText('asya', 'poks');

// function checkAge(age) {
//   if (age > 18) {
//     alert('доступ получен');
//   } else alert('доступ запрещен');
// }
// let age = prompt('cskolko let');
// if (checkAge(age)) {
//   alert('dostup est');
// } else alert('dostupa net');

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pows(x, n) {
  return console.log(x ** n);
}
pows(3, 3);

// function sayHi() {
//   alert('Привет');
// }

// console.log(sayHi());

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('vvedite parol');
if (message === ADMIN_PASSWORD) {
  alert('super');
} else if (message == null || message == '') {
  alert('hernya');
} else alert('hernya parol');

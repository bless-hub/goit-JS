'use strict';

const findLongestWord = function(string) {
  const stringSplit = string.split(' ');
  let longestWord = [0];

  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > longestWord.length) {
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

/**
//  * @param {string} s
//  * @return {number}
 */

let romanToInt = function(s) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  const arr = [...s];

  for (let i = 0; i < arr.length; i++) {
    // subtract char from total if char is less than next char
    if (key[s[i]] < key[s[i + 1]]) {
      res -= key[s[i]];
      // else add to res
    } else {
      res += key[s[i]];
    }
  }
  return res;
};

const a = 'IX';
const b = 'LVIII';
const c = 'II';
const d = 'MCMXCIV';

console.log(romanToInt(a));
console.log(romanToInt(b));
console.log(romanToInt(c));
console.log(romanToInt(d));

/**
//  * @param {number} num
//  * @return {string}
 */
var intToRoman = function(num) {
  const table = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  let res = '';
  const values = Object.keys(table);

  for (let i = values.length - 1; i >= 0; i--) {
    const val = values[i];
    while (num >= val) {
      res += table[val];
      num -= val;
    }
  }
  return res;
};
// var intToRoman = function(num) {
//   const table = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
//   };

//   let res = '';

//   const values = Object.keys(table).reverse();

//   values.forEach(val => {
//     while (num >= val) {
//       if (num >= 900 && num < 1000) {
//         res += 'CM';
//         num -= 900;
//       } else if (num >= 400 && num < 500) {
//         res += 'CD';
//         num -= 400;
//       } else if (num >= 90 && num < 100) {
//         res += 'XC';
//         num -= 90;
//       } else if (num >= 40 && num < 50) {
//         res += 'XL';
//         num -= 40;
//       } else if (num === 9) {
//         res += 'IX';
//         num -= 9;
//       } else if (num === 4) {
//         res += 'IV';
//         num -= 4;
//       } else {
//         res += table[val];
//         num -= val;
//       }
//     }
//   });

//   return res;
// };

const x = 433;
const y = 12;
const z = 2532;

console.log(intToRoman(x));
console.log(intToRoman(y));
console.log(intToRoman(z));

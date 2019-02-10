/**
//  * @param {number} x
//  * @return {boolean}
 */
// var isPalindrome = function(x) {
//   const str = x.toString();
//   const N = str.length - 1;
//   for (let i = 0; i <= N / 2; i++) {
//     if (str[i] !== str[N - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// var isPalindrome = function(x) {
//   if (x < 0) {
//     return false;
//   }

//   let num = x;
//   const arr = [];
//   while (num >= 1) {
//     const tail = num % 10;
//     arr.push(tail);
//     num = Math.floor(num / 10);
//   }

//   const revNum = parseInt(arr.join(''));

//   return x === revNum;
// };

var isPalindrome = function(x) {
  // Special cases
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let rev = 0;
  while (rev < x) {
    // add to rev
    rev = rev * 10;
    rev = rev + (x % 10);
    // remove from x
    x = Math.floor(x / 10);
  }
  return x === rev || x === Math.floor(rev / 10);
};

const x = 1121211;
const y = 1312222131;
// const str = 'Hello World';

console.log(isPalindrome(x));
console.log(isPalindrome(y));
// console.log(isPalindrome(str));

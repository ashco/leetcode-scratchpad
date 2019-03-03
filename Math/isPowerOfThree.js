/**
 * @param {number} n
 * @return {boolean}
 */

// Given an integer, write a function to determine if it is a power of three.


// const isPowerOfThree = (n) => {
//   // base case
//   if (n === 0) return false;
//   if (n === 1) return true;
//   if (n === 3) return true;
//   // recursive case
//   if (n % 3 !== 0) return false;
//   return isPowerOfThree(n / 3);
// };

// Follow up:
// Could you do it without using any loop / recursion?

const isPowerOfThree = (n) => {
  getBaseLog(n);
};
// 8 / 2 = 3
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

console.log(getBaseLog(3, 27)); // 3 * 3 * 3 = 27 => 3

// 1 = 3
// 2 = 9
// 3 = 27
// 4 = 81
// 5 = 243

// console.log(isPowerOfThree(27)); // true
// console.log(isPowerOfThree(0)); // false
// console.log(isPowerOfThree(9)); // true
// console.log(isPowerOfThree(45)); // false

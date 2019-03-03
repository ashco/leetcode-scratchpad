/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const revStr = n
  // const revStr = toString(n)
  // .split('').reverse().join('');
  return revStr;
  // return parseInt(revStr);
};

// Input: 11111111111111111111111111111101
// Output: 10111111111111111111111111111111
console.log(reverseBits(11111111111111111111111111111101))


// Input: 00000010100101000001111010011100
// Output: 00111001011110000010100101000000
console.log(reverseBits(00000010100101000001111010011100))
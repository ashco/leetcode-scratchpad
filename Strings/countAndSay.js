/**
 * @param {number} n
 * @return {string}
 */
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221 => [[1,1,1],[2,2],[1]] => 312211
// 6.     312211
// 7.     13112221

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// const countAndSay = function(n) {
//   // base case
//   if (n === 1) return [[1]];

//   // recursive case
//   const prevN = countAndSay(n - 1);

//   // parse prevN, turn into [[1]]
//   // return count and number = "11"
// };


// convert n to number
// convert number to array breakout
function splitter(str) {
  const split = str.split('');
  let tracer = 0;

  const arr = split.reduce((acc, cur, i) => {
    if (cur !== split[tracer]) {
      const subArr = split.slice(tracer, i);
      tracer = i;
      return acc.push(subArr);
      // return acc;
    }
    return acc;
  }, []);

  console.log(arr);
}
// translate array to string

console.log(splitter('1211'));
// [1, 1, 2, 1];

// console.log(countAndSay(1)); // "1"
// console.log(countAndSay(4)); // "1211"

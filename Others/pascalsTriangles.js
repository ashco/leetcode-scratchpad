/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const arr = [];
  // base case
  if (numRows >= 1) {
    arr.push([1]);
  }
  if (numRows >= 2) {
    arr.push([1, 1]);
  }
  // loop through each level
  for (let i = 3; i <= numRows; i += 1) {
    const lastRow = arr[arr.length - 1];
    // left 1
    const newRow = [1];
    // middle numbers
    for (let j = 0; j < lastRow.length - 1; j += 1) {
      const newNum = lastRow[j] + lastRow[j + 1];
      newRow.push(newNum);
    }
    // right 1
    newRow.push(1);
    arr.push(newRow);
  }
  return arr;
};

//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]

console.log(generate(5));

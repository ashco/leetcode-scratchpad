/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const arr = [];

  nums.forEach(num => {
    if (arr.includes(num)) {
      const i = arr.indexOf(num);
      arr.splice(i, 1);
    } else {
      arr.push(num);
    }
  });

  return arr[0];
};

console.log(singleNumber([3, 2, 2, 3, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4

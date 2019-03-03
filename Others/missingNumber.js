/**
 * @param {number[]} nums
 * @return {number}
 */
const factoralize = function(num) {
  let res = 0;
  for (let i = 0; i <= num; i += 1) {
    res += i;
  }
  return res;
};

const missingNumber = function(nums) {
  const factoral = factoralize(nums.length);
  const sum = nums.reduce((acc, cur) => acc + cur);

  return factoral - sum;
};


console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([3, 2, 0])); // 8

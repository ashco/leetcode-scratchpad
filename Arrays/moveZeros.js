/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = function(nums) {
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    const cur = nums[i];
    if (cur === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]

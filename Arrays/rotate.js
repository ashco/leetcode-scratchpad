/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   const left = nums.slice(-k);
//   const right = nums.slice(0, -k);
//   const ans = [...left, ...right];

//   return ans;
// };

// var rotate = function(nums, k) {
//   const shift = nums.splice(-k);
//   const ans = shift.concat(nums);

//   return ans;
// };

// 0(1) extra space aka in place
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

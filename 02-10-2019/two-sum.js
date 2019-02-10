// @param {number[]} nums
// @param {number} target
// @return {number[]}

// var twoSum = function(nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i <= nums.length - 1; i++) {
    const val = nums[i];
    const gap = target - val; // Calc what other value is needed

    if (map[gap] !== undefined) {
      return [map[gap], i];
    }
    map[val] = i;
  }
};

const nums = [2, 7, 11, 15],
  target = 18;

console.log(twoSum(nums, target));

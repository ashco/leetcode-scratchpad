/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const require = target - current;
    if (hash[current] !== undefined) {
      return [hash[current], i];
    }
    hash[require] = i;
  }
  return -1;
};

// is nums sorted?
// can there be negative nums? - If so, can reduce range of nums

// Because nums[0] + nums[1] = 2 + 7 = 9,
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1].
console.log(twoSum([4, 8, 15, 16, 23, 42], 39)); // [3, 4].
console.log(twoSum([3, 2, 4], 6)); // [1, 2].

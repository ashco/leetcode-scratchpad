/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const nums = this.nums;
  const n = nums.length;
  const shuffled = [];

  for (let i = 0; i < n; i++) {
    shuffled.splice(Math.floor(Math.random() * n), 0, nums[i]);
  }

  return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const nums = [1, 2, 3];
const obj = new Solution(nums);
var param_2 = obj.shuffle();
console.log(param_2);
var param_1 = obj.reset();
console.log(param_1);

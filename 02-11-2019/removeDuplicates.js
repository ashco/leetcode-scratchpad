/**
//  * @param {number[]} nums
//  * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = 0;

  nums.forEach(num => {
    if (num !== nums[length]) {
      length++;
      nums[length] = num;
    }
  });
  length++;

  nums.splice(length);
  return length;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = nums.length - 1; j > i; j--) {
  //     if (nums[i] === nums[j]) {
  //       nums.splice(j, 1);
  //     }
  //   }
  // }
  // return nums.length;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));

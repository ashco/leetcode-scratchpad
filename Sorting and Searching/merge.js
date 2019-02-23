/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  nums2.forEach(num2 => {
    for (let i = 0; i < nums1.length; i++) {
      if (num2 > nums1[i]) {
        nums1.splice(i, 0, num2);
        break;
      }
    }
  });
  nums1.splice(-m);
};

const nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6],
  m = 3,
  n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

// Output: [1,2,2,3,5,6]

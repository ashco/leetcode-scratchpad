/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  if (n === 0) return;

  let i = 0;
  let j = 0;

  while (i < m || j < n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
    i++;

    // if end of nums1 and nums1 end num is less than current nums2
    if (i >= m && nums1[i] < nums2[j]) {
      nums1.splice(m + j, 0, ...nums2.splice(j));
      break;
    }
  }

  nums1.splice(-n);
};

const nums1 = [0],
  nums2 = [1],
  m = 0,
  n = 1;

// const nums1 = [1, 2, 3, 0, 0, 0],
//   nums2 = [2, 5, 6],
//   m = 3,
//   n = 3;
// Output: [1,2,2,3,5,6]

// const nums1 = [4, 0, 0, 0, 0, 0],
//   m = 1,
//   nums2 = [1, 2, 3, 5, 6],
//   n = 5;
// Output:[1,2,3,4,5,6]

merge(nums1, m, nums2, n);
console.log(nums1);

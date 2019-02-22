/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  const table = [];
  let containsDup = false;

  nums.forEach(num => {
    if (table.includes(num)) {
      containsDup = true;
    }
    table.push(num);
  });
  return containsDup;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

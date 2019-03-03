/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;

  const tip = needle[0];
  for (let i = 0; i <= haystack.length - needle.length; i += 1) {
    const target = haystack[i];
    if (tip === target) {
      const substack = haystack.slice(i, (i + needle.length));
      if (substack === needle) {
        return i;
      }
    }
  }
  return -1;
};


console.log(strStr('hhhhelllllo', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('heyho', '')); // 0
console.log(strStr('a', 'a')); // 0

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  s = s.toLowerCase().replace(/\W/gi, '');
  const t = s.split('').reverse();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }
  return true;
};

// const s = 'A man, a plan, a canal: Panama'; // true
const s = 'race a car'; // false

console.log(isPalindrome(s));

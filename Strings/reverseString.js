/**
 * @param {character[]}
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverseString(s) {
  // return s.reverse(); // Duh!

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    s.splice(i, 1);
    s.unshift(char);
  }
  return s;
}

// const s = ['h', 'e', 'l', 'l', 'o'];
const s = ['H', 'a', 'n', 'n', 'a', 'h'];
// const s = ['H', 'a', 's', 'h', 't', 'a', 'b', 'l', 'e'];

console.log(reverseString(s));

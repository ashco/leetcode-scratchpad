const isPrimeNumber = function(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const countPrimes = function(n) {
  let count = 0;

  for (let i = n - 1; i > 0; i -= 1) {
    if (isPrimeNumber(i)) {
      count += 1;
    }
  }

  return count;
};


// function loop() {
//   for (let i = 2; i < 20; i += 1) {
//     console.log(`${i}: ${isPrimeNumber(i)}`);
//   }
// }
// loop();
console.log(countPrimes(999983)); // 4
// There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 51, 53, 57, 59, 61

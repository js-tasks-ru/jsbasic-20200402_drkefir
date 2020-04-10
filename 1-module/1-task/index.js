/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    result = 1;
  } else if (n === 2) {
    result = 2;
  } else {
    for (i = 1; i < n; i++) {
      step = n - i;
      result *= step;
    }
  }
  return result;
}
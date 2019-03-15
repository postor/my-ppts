/**
 * 乘法，m、n只需考虑正整数和0，不可以使用乘号
 * @param {*} m 
 * @param {*} n 
 */
function multiply(m, n) {
  if (n == 1) return m
  return multiply(m, n - 1) + m
}

console.log(multiply(6, 8))
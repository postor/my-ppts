/**
 * 除法，m、n只需考虑正整数和0，结果只需要整数，不可以使用除号
 * @param {*} m 
 * @param {*} n 
 */
function divide(m, n) {
  if (m < n) return 0
  return 1 + divide(m - n, n)
}

console.log(divide(10, 3))
//3，解释10/3=3余数1
/**
 * 计算n的阶乘
 * @param {*} n 
 */
function factorial(n) {
  if (n == 1) return 1
  return factorial(n - 1) * n
}

console.log(factorial(4))

//36选7，可能的情况有36!/(7!*(36-7)!)种
let bigCases = factorial(36)/(factorial(7)*factorial(36-7))

console.log(`最大奖概率为${(100*1/bigCases).toFixed(6)}%`)

//最少选中4个就可以中最小奖
let smallCases = factorial(36)/(factorial(4)*factorial(36-4))

console.log(`最大奖概率为${(100*1/smallCases).toFixed(6)}%`)
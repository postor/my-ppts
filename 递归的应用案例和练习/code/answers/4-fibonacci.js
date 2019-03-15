/**
 * 返回第n个数字
 * @param {*} n 
 */
function fibonacci(n) {
  if (n == 1 || n == 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}


/*
n=1,返回1
n=2,返回1
n=3,返回2
n=4,返回3
n=5,返回5
...
*/

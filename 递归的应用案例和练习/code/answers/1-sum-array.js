/**
 * 数组求和
 * @param {*} arr 
 */
function sumArray(arr) {
  if (arr.length == 0) return 0
  if (arr.length == 1) return arr[0]
  let x = arr[arr.length - 1]
  arr.length = arr.length - 1
  return sumArray(arr) + x
}

console.log(sumArray([1, 2, 3, 4]))
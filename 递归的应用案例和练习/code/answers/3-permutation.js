
/**
 * 计算数组元素的所有可能排列
 * @param {[]} arr 
 */
function permutation(arr) {
  let rtn = []
  getP([], [], arr.length)
  return rtn

  function getP(used, cur, left) {
    if (left == 0) {
      rtn.push(cur)
    }
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue
      let newUsed = used.concat()
      newUsed[i] = true
      getP(newUsed, cur.concat([arr[i]]), left - 1)
    }
  }
}

console.log(permutation([1,2,3]).join('\n'))

/*
arr=[1,2]
[[1,2],[2,1]]


arr=[1,2,3]
[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

....

*/

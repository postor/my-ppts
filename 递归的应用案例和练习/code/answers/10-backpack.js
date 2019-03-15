/**
 * 背包问题
 * @param {Item[]} items 给定的物品列表
 * @param {Number} maxWeight 背包最大载重
 * @returns {Number[]} 选择携带的下标 
 */
function backpack(items, maxWeight) {
  let maxValue = 0, choosed = []
  tryPutOne([], 0, 0)
  return choosed.map((x,i)=>x?i:false).filter(x=>x!==false)

  function tryPutOne(arr, value, weight) {
    let canPut = false
    for (let i = 0; i < items.length; i++) {
      if (arr[i]) {
        continue
      }
      let newWeight = items[i].weight + weight
      if (newWeight <= maxWeight) {
        canPut = true
        let newArr = arr.concat()
        newArr[i] = true
        tryPutOne(newArr, value + items[i].value, newWeight)
      }
    }
    if (!canPut) {
      //如果不能再装了开始结算
      if (maxValue < value) {
        choosed = arr
        maxValue = value
      }
    }
  }
}

/**
 * 物品结构
 */
class Item {

  constructor(w, v) {
    this.weight = w
    this.value = v
  }
}

console.log(backpack([
  new Item(4, 5),
  new Item(8, 10),
  new Item(3, 3),
  new Item(5, 2),
  new Item(2, 3),
], 10))
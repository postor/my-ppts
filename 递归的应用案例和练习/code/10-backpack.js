/**
 * 背包问题
 * @param {Item[]} items 给定的物品列表
 * @param {Number} maxWeight 背包最大载重
 * @returns {Number[]} 选择携带的下标 
 */
function backpack(items, maxWeight) {
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
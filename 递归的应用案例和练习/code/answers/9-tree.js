class TreeNode {
  constructor(v, l = null, r = null) {
    this.value = v
    this.left = l
    this.right = r
  }
}

const kbt = new TreeNode('lu',
  new TreeNode('chen',
    new TreeNode('tian')
  ),
  new TreeNode('xiang',
    new TreeNode('xiao'),
    new TreeNode('lin')
  )
)

/**
 * 打印
  * @param {TreeNode} cur 
  * @param {*} prefix 
 */
function printTree(cur, prefix = '--') {
  if (cur) {
    console.log(`${prefix}${cur.value}`)
    const newPrefix = `  ${prefix}`
    printTree(cur.left, newPrefix)
    printTree(cur.right, newPrefix)
  }
}

printTree(kbt)
/*
--lu
  --chen
  --xiang
    --xiao
    --lin
*/

/**
 * 找到节点
 * @param {TreeNode} cur 
 * @param {*} val 
 */
function findNode(cur, val) {
  if (!cur) return null
  if (cur.value === val) {
    return cur
  }
  return findNode(cur.left, val) || findNode(cur.right, val)
}
console.log('find')
const xiang = findNode(kbt, 'xiang')
printTree(xiang)
/*
--xiang
  --xiao
  --lin
*/

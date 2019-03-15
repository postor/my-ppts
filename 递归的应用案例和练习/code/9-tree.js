class TreeNode {
  value
  left
  right
  constructor(v, l = null, r = null) {
    this.value = v
    this.left = l
    this.right = r
  }
}

const kbt = new TreeNode('lu',
  new TreeNode('chen'),
  new TreeNode('xiang',
    new TreeNode('xiao'),
    new TreeNode('lin')
  )
)

/**
 * 打印
 * @param {*} head 
 */
function printTree(head) {

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
 * @param {*} head 
 * @param {*} val 
 */
function findNode(head, val) {

}
const xiang = findNode(kbt, 'xiang')
printTree(xiang)
/*
--xiang
  --xiao
  --lin
*/

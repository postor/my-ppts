/**
 * 链表结构
 */
class LinkedNode {
  constructor(v, n = null) {
    this.val = v
    this.next = n
  }
}

/**
 * 打印链表
 * @param {*} head 
 */
function print(head) {
  let str = '', cur = head
  while (cur) {
    str += `${cur.val}->`
    cur = cur.next
  }
  console.log(str)
}

/**
 * 排序链表插入（从小到大）
 * @param {LinkedNode} head 链表头部
 * @param {*} val 值
 * @returns 操作后链表头部 
 */
function insert(head, val) {
  if (val < head.val) {
    return new LinkedNode(val, head)
  }
  insertCur(head, val)
  return head

  function insertCur(cur, val) {
    if (!cur.next) {
      cur.next = new LinkedNode(val)
      return
    }
    if (cur.next.val > val) {
      let tmp = cur.next
      cur.next = new LinkedNode(val, tmp)
      return
    }
    insertCur(cur.next, val)
  }
}
const list = new LinkedNode(1, new LinkedNode(3))
let h = insert(list, 2)
print(h)
h = insert(h, 5)
print(h)
h = insert(h, 0)
print(h)


/**
 * 链表删除
 * @param {LinkedNode} head 
 * @param {*} val
 * @returns 操作后链表头部 
 */
function remove(head, val) {
  if (head.val === val) {
    return head.next
  }
  removeCur(head, val)
  return head
  function removeCur(cur, val) {
    if (!cur.next) return
    if (cur.next.val === val) {
      cur.next = cur.next.next
      return
    }
    removeCur(cur.next, val)
  }
}

console.log('remove')
h = remove(h, 4)
print(h)

h = remove(h, 2)
print(h)

h = remove(h, 0)
print(h)

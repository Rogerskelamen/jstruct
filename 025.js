// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const reverseListNode = (head, times) => {
    if (times === 0) return head

    let pre = head
    let cur = head.next
    let next = cur.next

    while (times-- > 0) {
      cur.next = pre
      pre = cur
      cur = next
      if (next !== null) next = next.next
    }

    return pre
  }

  let ret = head
  let pre = head
  let cur = head
  let next = head
  for (let i = 0; i < k-1; i++) {
    if (ret !== null) ret = ret.next
  }

  let noGroup = false
  while (true) {
    for (let i = 0; i < k; i++) {
      if (next === null) {
        noGroup = true
        break
      }
      next = next.next
    }
    if (noGroup) break
    const preLink = reverseListNode(cur, k-1)
    if (cur !== head) pre.next = preLink
    pre = cur
    cur = next
  }
  pre.next = cur

  return ret
};

/**
 * Test below
 * 下面是测试代码
 */
const { ListNode, createListNode, displayListNode } = require('./lib/listNode.js')
const listNode = createListNode([1,2,3,4,5])
displayListNode(reverseKGroup(listNode, 1))

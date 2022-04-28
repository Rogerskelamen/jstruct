// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 首先获取到链表的大小
  let listNode = head
  let length = 0
  while (listNode) {
    length++
    listNode = listNode.next
  }

  // 得到正着数应该是第几个，注意这里获得的是物理索引
  let pN = length - n

  // 特殊情况：删除头
  if (pN === 0) {
    return head.next
  }

  listNode = head
  let i = 0
  while (i < pN) {
    i++
    if (i === 1) {
      continue
    }
    listNode = listNode.next
  }

  // 删除操作
  listNode.next = listNode.next.next
  return head
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(removeNthFromEnd());

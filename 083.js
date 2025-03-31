// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let extn = head

  // 如果和当前的元素值相同，则一直往后遍历，直到找到一个不同的元素值
  while (extn) {
    let intn = extn.next
    while (intn && extn.val === intn.val) {
      intn = intn.next
    }
    extn.next = intn
    extn = extn.next
  }

  return head
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates2 = function(head) {
  if (!head) return head // 判断是否直接是空指针

  let extn = head
  let next = extn.next

  // 暂存数据，如果下一个数据和暂存数据相同，删除当前节点
  while (next) {
    if (next.val === extn.val) {
      extn.next = next.next
    }else {
      extn = next
    }
    next = next.next
  }

  return head
}


/**
 * Test below
 * 下面是测试代码
 */
const { createListNode, displayListNode } = require('./lib/listNode');

var listNode = createListNode([1, 1, 2, 3, 3])
displayListNode(listNode)
processedListNode = deleteDuplicates2(listNode)
displayListNode(processedListNode)

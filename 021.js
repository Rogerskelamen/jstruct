// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 首先创建一个新的链表
  let head = new ListNode()
  let tail = head

  // 如果两个链表有一个没有遍历完
  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val <= list2.val) {
        tail.next = list1
        list1 = list1.next
      } else {
        tail.next = list2
        list2 = list2.next
      }
    } else {
      if (!list2) {
        tail.next = list1
        list1 = list1.next
      } else {
        tail.next = list2
        list2 = list2.next
      }
    }
    tail = tail.next
  }

  return head.next
};

/**
 * Test below
 * 下面是测试代码
 */
let list1 = createListNode([0])
let list2 = createListNode([0])
let list = mergeTwoLists(list1, list2)
displayListNode(list)

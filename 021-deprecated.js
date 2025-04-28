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
  if (!list1 && !list2) return null

  let head = new ListNode()
  if (!list1) {
    head = list2
    list2 = list2.next
  }else if (!list2) {
    head = list1
    list1 = list1.next
  }else {
    if (list1.val < list2.val) {
      head = list1
      list1 = list1.next
    }else {
      head = list2
      list2 = list2.next
    }
  }

  let s = head

  while (list1 || list2) {
    if (!list1) {
      s.next = list2
      list2 = list2.next
    }
    else if (!list2) {
      s.next = list1
      list1 = list1.next
    } else {
      if (list1.val < list2.val) {
        s.next = list1
        list1 = list1.next
      }else {
        s.next = list2
        list2 = list2.next
      }
    }
    s = s.next
  }

  return head
};

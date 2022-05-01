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
  // 首先指明两个链表的
  // 首先保留第一个链表的表头，做为返回值
  let pList
  if (list1.val > list2.val) {
    let head = list2
  }
  let head = list1

  // 查看是否list2中的元素比list1的头元素大
  let isHead = true
  while (list2 && list2.val < list1.val) {
    if (isHead) {
      head = list2
      isHead = false
    }
    if (list2.next.val >= list1.val) {
      pList = list2
      list2 = list2.next
      pList.next = list1
      break
    }
    list2 = list2.next
  }

  // 创建两个中间量，表示两个链表的指针
  // 如果两个链表都遍历完了就退出
  while (list1 && list2) {
    while (list2.val )
    if (head === list1 && list1.val > list2.val) {
      
    }
  }

  return head
};

// 导出链表数据结构的方法
module.exports = {
  createListNode,
  displayListNode,
  findNodeByIndex,
  deleteNodeByIndex,
  insertNodeByIndex,
};


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 由数组创建一个链表(尾插法)
/**
 * @param {number[]} arr
 * @return {ListNode}
 */
function createListNode(arr) {
  let head = null, tail = null
  for (let i = 0; i < arr.length; i++) {
    // 如果head不存在（未初始化），则进入初始化环节
    if (!head) {
      head = tail = new ListNode(arr[i])
    } else {
      // 一般步骤
      tail.next = new ListNode(arr[i])
      tail = tail.next
    }
  }
  // 此时tail不用指向null，因为如果节点不指向，默认指向null
  return head;
}

// 输出所有的链表值
/**
 * @param {ListNode} listNode
 */
function displayListNode(listNode) {
  while (listNode) {
    process.stdout.write(listNode.val + " -> ")
    listNode = listNode.next
  }
  process.stdout.write("null\n")
}

// 通过序号查找一个节点的值(序号从1开始)
/**
 * @param {ListNode} listNode
 * @param {Number} index
 * @return {Number}
 */
function findNodeByIndex(listNode, index) {
  let i = 1
  while (listNode) {
    if (i === index) {
      return listNode.val
    }
    listNode = listNode.next
    i++
  }
  // 如果没找到（数组越界）就返回null
  return null
}

// 根据序号删除某个节点（序号从1开始）
/**
 * @param {ListNode} listNode
 * @param {Number} index
 * @return {ListNode}
 */
function deleteNodeByIndex(listNode, index) {
  let head = listNode
  let i = 1
  while (listNode.next) {
    if (i === index) {
      if (i === 1) {
        // 如果删除的是第一个
        head = head.next
        break
      } else {
        // 普遍情况
        listNode.next = listNode.next.next
        break
      }
    }
    if (i !== 1) {
      listNode = listNode.next
    }
    i++
  }
  return head
}

// 往链中插入一个数字（序号从1开始）
/**
 * @param {ListNode} listNode
 * @param {Number} index
 * @param {Number} val
 * @return {ListNode}
 */
function insertNodeByIndex(listNode, index, val) {
  let head = listNode
  let i = 1
  while (listNode) {
    if (i === index) {
      if (i === 1) {
        // 插入的是第一个位置
        head = new ListNode(val, head)
        break
      } else {
        // 普遍情况
        listNode.next = new ListNode(val, listNode.next)
        break
      }
    }
    if (i !== 1) {
      listNode = listNode.next
    }
    i++
  }
  return head
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 用一个数组arr来接收结果，最终转换成链表
  let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
}


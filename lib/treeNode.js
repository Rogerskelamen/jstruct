// 导出二叉树数据结构的方法
module.exports = {
  createTreeNode,
  preorderTraversal,
  inorderTraversal,
  postorderTraversal,
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * 由数组创建二叉树，给到的数据以完全二叉树的方式填充元素
 * @param {number[]} arr
 * @return {TreeNode|null} root
 */
var createTreeNode = function(arr) {
  if (!arr || arr.length === 0) return null

  let root = new TreeNode(arr[0])
  let queue = [root]
  let i = 1

  while (i < arr.length) {
    let node = queue.shift()

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    i++

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i])
      queue.push(node.right)
    }
    i++
  }

  return root;
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let arr = []
  if (root) {
    arr.push(root.val)
    preorderTraversal(root.left).map(item => arr.push(item))
    preorderTraversal(root.right).map(item => arr.push(item))
  }
  return arr
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let arr = []
  if (root) {
    inorderTraversal(root.left).map(item => arr.push(item))
    arr.push(root.val)
    inorderTraversal(root.right).map(item => arr.push(item))
  }
  return arr
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let arr = []
  if (root) {
    postorderTraversal(root.left).map(item => arr.push(item))
    postorderTraversal(root.right).map(item => arr.push(item))
    arr.push(root.val)
  }
  return arr
};


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ret = []
  if (!root) return ret

  let queue = [root]

  while (queue.length > 0) {
    let level = []
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      level.push(node.val)

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    ret.push(level)
    console.log(level)
  }

  return ret
};


/**
 * Test below
 * 下面是测试代码
 */
let treeNode = createTreeNode([3,9,20,null,null,15,7])
console.log(levelOrder(treeNode))

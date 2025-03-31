// 导出二叉树数据结构的方法
module.exports = {
  TreeNode,
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
  }

  return ret
};


/**
 * 自顶向下解决问题的例子
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // edge case
  if (!root) return 0

  // from top to bottom
  let depth = 1
  let ret = depth

  const updateDepth = (node, depth) => {
    if (node === null) return

    ret = Math.max(ret, depth)
    updateDepth(node.left, depth + 1)
    updateDepth(node.right, depth + 1)
  }

  updateDepth(root, depth)
  return ret
};


/**
 * 自底向上解决问题的例子
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // edge case
  if (!root) return true

  const check = (left, right) => {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false

    return check(left.left, right.right) &&
           check(left.right, right.left)
  }

  return check(root.left, root.right)
};


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const acc = (node, sum) => {
    if (!node) return false
    sum = sum + node.val
    if (sum === targetSum && !node.left && !node.right) return true

    return acc(node.left, sum) ||
           acc(node.right, sum)
  }

  return acc(root, 0)
};


/**
 * Test below
 * 下面是测试代码
 */
// let treeNode = createTreeNode([1, 2, 3])
// console.log(hasPathSum(treeNode, 5))

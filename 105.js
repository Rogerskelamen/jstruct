// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

const { TreeNode } = require('./lib/treeNode')

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const fn = (in_left, in_right) => {
    if (in_left > in_right) return null

    let val = preorder.shift()
    let index = inorder.indexOf(val)
    let node = new TreeNode(val)

    node.left = fn(in_left, index-1)
    node.right = fn(index+1, in_right)
    return node
  }

  return fn(0, inorder.length-1)
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))

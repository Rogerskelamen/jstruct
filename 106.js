// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

const { TreeNode } = require('./lib/treeNode')

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const fn = (in_left, in_right) => {
    if (in_left > in_right) return null

    let val = postorder.pop()
    let index = inorder.indexOf(val)
    let node = new TreeNode(val)

    node.right = fn(index+1, in_right)
    node.left = fn(in_left, index-1)
    return node
  }

  return fn(0, inorder.length-1)
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))

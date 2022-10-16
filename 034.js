// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i)
      while (nums[i] === target) {
        i++
      }
      result.push(i - 1)
      return result
    }
  }
  return [-1, -1]
};

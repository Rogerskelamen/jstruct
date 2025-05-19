// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const binarySearch = (left, right, target) => {
    if (left === right) {
      if (target <= nums[left]) return left
      else return right+1
    }

    let mid = Math.floor((right + left) / 2)
    if (target === nums[mid]) return mid
    if (target < nums[mid])
      return binarySearch(left, mid, target)
    else
      return binarySearch(mid+1, right, target)
  }

  return binarySearch(0, nums.length-1, target)
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(searchInsert([1,3,5,6], 5))

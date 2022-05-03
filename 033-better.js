// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums) {
    return -1
  }

  let l = 0,
      r = nums.length

  while (l <= r) {
    mid = parseInt((l + r) / 2)
    if (nums[mid] === target) {
      return mid
    }

    if (nums[0] <= nums[mid]) {
      // 说明前半部分是有序的
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[nums.length-1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
};

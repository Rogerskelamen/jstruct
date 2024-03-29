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
  let ans = [-1, -1]
  const leftIdx = binarySearch(nums, target, true)
  const rightIdx = binarySearch(nums, target, false) - 1
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = [leftIdx, rightIdx]
  }
  return ans
};

const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

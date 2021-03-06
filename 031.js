//整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

//例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
//整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

//例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
//类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
//而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
//给你一个整数数组 nums ，找出 nums 的下一个排列。

//必须 原地 修改，只允许使用额外常数空间。


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 如果只有一个元素，直接返回
  if (nums.length === 1) {
    return
  }

  let j = nums.length - 1
  let i = nums.length - 2
  // 找出生序开始的地方
  while (nums[i] > nums[j]) {
    i--
    j--
    if (i === 0 && nums[i] > nums[j]) {
      // 如果真个数组都是降序的，直接返回一个整个生序的数组
      nums = nums.sort((a, b) => a - b)
      return nums
    }
  }

  // j从后向前找到第一个大于nums[i]的元素
  let k = nums.length - 1
  while (nums[i] > nums[k]) {
    k--
  }

  // 交换k和i位置的元素
  let temp = nums[i]
  nums[i] = nums[k]
  nums[k] = temp

  nums = nums.slice(0, i + 1).concat(nums.slice(i + 1, nums.length).sort((a, b) => a - b))
  return nums
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(nextPermutation([1,3,2]));

//整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

//例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
//整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

//例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
//类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
//而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
//给你一个整数数组 nums ，找出 nums 的下一个排列。

//必须 原地 修改，只允许使用额外常数空间。

/**
 * @description 升序排列数组特定区间
 * @param {number} start
 * @param {number} end
 */
Array.prototype.cmp = function(start, end) {
  var turns = end - start
  for (let i = 0; i < turns; i++) { // 执行这么多轮
    for (let j = start; j < end - i; j++) {
      if (this[j] > this[j + 1]) {
        var temp = this[j + 1]
        this[j + 1] = this[j]
        this[j] = temp
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 如果只有一个元素，直接返回
  if (nums.length === 1) {
    return
  }

  let j = nums.length - 1 // j指向最后一个元素
  let i = nums.length - 2 // i指向倒数第二个元素
  // 找出升序开始的地方
  while (nums[i] >= nums[j]) {
    if (i === 0 && nums[i] >= nums[j]) {
      // 如果整个数组都是降序的，直接返回一整个升序的数组
      nums.sort((a, b) => a - b)
      console.log(nums)
      return
    }
    i--
    j--
  }

  // k从后向前找到第一个大于nums[i]的元素
  let k = nums.length - 1
  while (nums[i] >= nums[k]) {
    k--
  }

  if (k === -1) {
    console.log(nums)
    return
  }

  // 交换k和i位置的元素
  let temp = nums[i]
  nums[i] = nums[k]
  nums[k] = temp

  // 将i之后的所有元素升序排列
  nums.cmp(i + 1, nums.length - 1)
  console.log(nums)
};

/**
 * Test below
 * 下面是测试代码
 */
nextPermutation([1,1])

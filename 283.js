// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。


/**
 * 可以采用插入排序的思想，[0, i]之间的元素都是非零的，不断增大i
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = 1

  while (j < nums.length) {
    while (nums[i] !== 0 && i < nums.length)
      i++
    if (j <= i) j = i + 1
    while (nums[j] === 0 && j < nums.length)
      j++
    if (j >= nums.length) break
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
    i++
    j++
  }
  console.log(nums)
};


/**
 * Test below
 * 下面是测试代码
 */
moveZeroes([1, 0])

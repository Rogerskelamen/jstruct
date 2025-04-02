// 给你一个整数数组 nums ，你可以对它进行一些操作。

// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  // 1. 先构建数的和
  let max = 0
  for (const num of nums) {
    max = Math.max(num, max)
  }
  let sum = new Array(max + 1).fill(0)

  for (const num of nums) {
    sum[num] += num
  }

  let dp = [0]

  for (let i = 1; i < sum.length; i++) {
    if (i === 1) {
      dp.push(sum[1])
      continue
    }
    dp.push(Math.max(dp[i - 1], dp[i - 2] + sum[i]))
  }

  return dp[sum.length - 1]
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(deleteAndEarn([3,4,2]))

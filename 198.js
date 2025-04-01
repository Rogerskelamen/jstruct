// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  /**
   * 动规题，递推公式如下：
   * dp(i) = max(dp(i-1), dp(i-2) + v_i)
   */
  let dp = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp.push(nums[0])
      continue
    }
    if (i === 1) {
      dp.push(Math.max(nums[0], nums[1]))
      continue
    }
    dp.push(Math.max(dp[i - 1], dp[i - 2] + nums[i]))
  }

  return dp[nums.length - 1]
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(rob([2,7,9,3,1]))

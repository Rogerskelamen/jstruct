// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];

  nums = nums.sort()

  // 直接用枚举法
  for (let i = 0; i < nums.length;) {
    for (let j = i + 1; j < nums.length;) {
      for (let k = j + 1; k < nums.length;) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]])
        }
        while (nums[k] === nums[k + 1]) {
          k++
        }
        k++
      }
      while (nums[j] === nums[j + 1]) {
        j++
      }
      j++
    }
    while (nums[i] === nums[i + 1]) {
      i++
    }
    i++
  }

  return result
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(threeSum([]));

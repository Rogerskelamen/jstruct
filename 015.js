// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 首先进行数组排序
  nums = nums.sort((a, b) => a - b)
  console.log(nums)

  // 定义返回的二维数组
  let result = []
  let index = 0
  while (index < nums.length - 1) {
    // 初始化双指针
    let left = index + 1,
        right = nums.length - 1
    while (left < right) {
      let sum = nums[index] + nums[left] + nums[right]
      if (sum === 0) {
        // 如果三数相加等于0，则记录到返回数组中
        result.push([nums[index], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      }
    }
    // 如果后面一个元素和当前元素相同，指针往后移
    while (nums[index] === nums[index + 1]) {
      index++
    }
    index++
  }

  return result
}

/**
 * Test below
 * 下面是测试代码
 */
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));

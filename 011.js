// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 定义双指针
  let left = 0, right = height.length - 1

  let w, h
  let maxVolume = 0
  while (left < right) {
    w = right - left
    h = height[left] > height[right] ? height[right] : height[left]
    if (w * h > maxVolume) {
      maxVolume = w * h
    }
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }

  return maxVolume
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(maxArea([1,8,6,2,5,4,8,3,7]))

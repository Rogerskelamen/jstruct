// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let len = height.length

  // special case
  if (len === 0) {
    return 0
  }

  /**
   * @param {number[]} arr
   * @return {number}
   */
  function calc(arr) {
    // console.log('arr to be calculated : ' + arr)
    let base_height,
        rain = 0
    if (arr[0] > arr[arr.length - 1]) { // find the lower column
      base_height = arr[arr.length - 1]
    }else {
      base_height = arr[0]
    }
    for (let i = 1; i < arr.length - 1; i++) {
      rain += base_height - arr[i]
    }
    // console.log('the calculation result: ' + rain)
    return rain
  }

  let ans = 0;

  // initialize two pointers
  let left = 0,
      right = left + 1
  while (left < len - 1) {
    if (height[left] > height[right]) { // except the neighborhood columns
      let i_highest = right
      while (++right < len) { // right = left + 2 (at beginning)
        if (height[left] <= height[right]) { // find the right end
          ans += calc(height.slice(left, right+1)) // calculate the capacity of rain
          break
        }
        if (height[right] >= height[i_highest]) {
          i_highest = right // update highest column
        }
        if (right === len - 1) { // hit end of the array
          ans += calc(height.slice(left, i_highest+1))
          break
        }
      }
    }
    left = right++ // update left/right, reloop
  }

  return ans
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(trap([4,2,0,3,2,5]))

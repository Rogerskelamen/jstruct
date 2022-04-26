// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 首先转换为字符串
  x += ''

  if (x.length === 1) {
    return true
  }

  if (x.length % 2 === 0) {
    // 偶数情况
    j = x.length / 2
    i = j - 1
    while (i >= 0) {
      if (x[i] !== x[j]) {
        return false
      }
      i--
      j++
    }
  } else {
    // 奇数情况
    j = (x.length + 1) / 2
    i = j - 2
    while (i >= 0) {
      if (x[i] !== x[j]) {
        return false
      }
      i--
      j++
    }
  }

  return true
};

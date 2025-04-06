// 给你一个字符串 s，找到 s 中最长的回文子串。

// 采用动态规划法
// dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 判断长度是否只有1
  if (s.length < 2) {
    return s
  }

  let maxLen = 1
  let begin = 0

  let dp = []
  // 初始化这个数组
  for (let i = 0; i < s.length; i++) {
    let subarr = []
    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        subarr.push(true)
      } else {
        subarr.push(false)
      }
    }
    dp.push(subarr)
  }

  // 开始填表
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i <= 2) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 如果是回文串，此时就记录回文串长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.slice(begin, begin + maxLen)
};

var isPalindrome = function(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

/**
 * Test below
 * 下面是测试代码
 */
console.log(longestPalindrome('12332'));

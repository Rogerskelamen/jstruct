// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  // dp[i][j] = dp[i-1][j-1] + 1 if text1[i] == text2[j],
  // max(dp[i-1][j], dp[i][j-1]) otherwise

  let dp = new Array(text1.length+1)
  for (let i = 0; i < text1.length+1; i++) {
    dp[i] = new Array(text2.length+1).fill(0)
  }

  for (let i = 0; i < text1.length+1; i++) {
    dp[i][0] = 0
  }
  for (let i = 0; i < text2.length+1; i++) {
    dp[0][i] = 0
  }

  for (let i = 1; i < text1.length+1; i++) {
    for (let j = 1; j < text2.length+1; j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      }else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }

  return dp[text1.length][text2.length]
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(longestCommonSubsequence("bl", "yby"))

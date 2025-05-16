// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
// 回文字符串 是正着读和倒过来读一样的字符串。
// 子字符串 是字符串中的由连续字符组成的一个序列。


/**
 * 和第5题一样，还是可以用动态规划求解，
 * 递推公式为：dp[i][j] = dp[i-1][j-1] && s[i] == s[j]
 *
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let dp = []

  // init for dp
  for (let i = 0; i < s.length; i++) {
    let subarr = []
    for (let j = 0; j < s.length; j++) {
      if (i === j)
        subarr.push(true)
      else
        subarr.push(false)
    }
    dp.push(subarr)
  }

  // traverse string to build dp
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (j-i <= 2) {
        if (s[i] === s[j]) dp[i][j] = true
      }else {
        if (s[i] === s[j])
          dp[i][j] = dp[i+1][j-1]
      }
    }
  }

  let ret = 0
  for (let i = 0; i < s.length; i++) {
    ret += dp[i].filter(item => item).length
  }

  return ret
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(countSubstrings('aaa'))

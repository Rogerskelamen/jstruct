// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // initial dp array
  let dp = new Array(s.length).fill(false)

  // smallest question scala
  for (const word of wordDict) {
    if (s.slice(0, word.length) === word)
      dp[word.length-1] = true
  }

  for (let i = 1; i < s.length; i++) {
    let flag = dp[i]
    for (const word of wordDict) {
      if (i-word.length < 0) continue
      if (s.slice(i-word.length+1, i+1) === word && dp[i-word.length])
        flag = true
    }
    dp[i] = flag
  }

  return dp[s.length-1]
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(wordBreak("goalspecial", ["go","goal","goals","special"]))

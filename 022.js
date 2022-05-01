// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []

  // 采取回溯法
  var backtrack = function(cur, open, close) {
    if (cur.length === n * 2) {
      result.push(cur)
    }

    if (open < n) {
      cur += '('
      backtrack(cur, open + 1, close)
      cur = cur.slice(0, cur.length - 1)
    }

    if (close < open) {
      cur += ')'
      backtrack(cur, open, close + 1)
      cur = cur.slice(0, cur.length - 1)
    }
  }

  backtrack('', 0, 0)
  return result
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(generateParenthesis(3));

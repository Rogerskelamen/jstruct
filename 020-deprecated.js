// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let left = 0

  // 初始化记录表
  let record = []
  for (let i = 0; i < s.length; i++) {
    record.push(false);
  }

  while (left < s.length) {
    let right = s.length - 1
    if (s[left] === '(' || s[left] === '[' || s[left] === '{') {
      while (right > left) {
        // 如果到了左指针即将等于右指针的时候，进行判断
        if (right === left + 1) {
          if (s[left] === '(' && s[right] === ')') {
            record[right] = true
            break
          } else if (s[left] === '[' && s[right] === ']') {
            record[right] = true
            break
          } else if (s[left] === '{' && s[right] === '}') {
            record[right] = true
            break
          } else {
            return false
          }
        }

        if (s[left] === '(' && s[right] === ')') {
          record[right] = true
          break
        } else if (s[left] === '[' && s[right] === ']') {
          record[right] = true
          break
        } else if (s[left] === '{' && s[right] === '}') {
          record[right] = true
          break
        }
        right--
      }
    } else {
      if (!record[left]) {
        return false
      }
    }
    left++
  }

  return true
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(isValid('{[]}'));

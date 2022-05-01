// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 将s转化为数组
  let behandled = []
  for (let i = 0; i < s.length; i++) {
    behandled.push(s[i])
  }
  // 初始化待处理数组堆栈
  let store = []

  for (let i = 0; i < s.length; i++) {
    let bracket = behandled.pop()
    store.push(bracket)
    if (i !== 0 && isPair(store[store.length - 1], store[store.length - 2])) {
      // 如果最后两个匹配成功，则删除两个
      store.pop()
      store.pop()
    }
  }

  return store.length === 0
};

var isPair = function(a, b) {
  if (a === '(' && b === ')') {
    return true
  } else if (a === '[' && b === ']') {
    return true
  } else if (a === '{' && b === '}') {
    return true
  } else {
    return false
  }
}

/**
 * Test below
 * 下面是测试代码
 */
console.log(isValid('()'));

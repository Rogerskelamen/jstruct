// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return []
  }

  let phone = [
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  let index = 0
  let queue = phone[parseInt(digits[index]) - 1]

  index++
  while (index < digits.length) {
    let tmpPhone = phone[parseInt(digits[index]) - 1]
    // 随着出队列操作，队列的第一个元素会变化
    while (queue[0].length !== index + 1) {
      // 数组pop操作
      let popOne = queue.slice(0, 1)
      queue = queue.slice(1)
      for (let i = 0; i < tmpPhone.length; i++) {
        // 将每个添加后的字母串进队列
        queue.push(popOne + tmpPhone[i])
      }
    }
    // 当前的数字字符处理完成，指针向后移
    index++
  }

  return queue
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(letterCombinations("23"));

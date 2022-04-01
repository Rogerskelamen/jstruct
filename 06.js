// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }

  var res = []
  for (var i = 0; i < numRows; i++) {
    res[i] = ''
  }

  // 获取字符串的长度
  var len = s.length
  // 定义移动索引
  var index = 0
  // 初始化移动的行
  var row = 0

  while (index < len) {
    while (index < len && row < numRows) {
      res[row] += s[index++]
      row++
    }

    if (index === len) {
      break
    }

    row -= 2

    while (index < len && row >= 0) {
      res[row] += s[index++]
      row--
    }

    row += 2
  }

  var str = ''
  for (var i = 0; i < numRows; i++) {
    str += res[i]
  }

  return str
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(convert('PAYPALISHIRING', 3));

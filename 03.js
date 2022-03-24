// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 考虑极端情况，输入的是个空字符串
  if (!s.length) {
    return 0;
  }
  // 首先是要找到无重复的子串
  // 使用滑动窗口
  var maxLength = 1 // 因为最小的子串至少有一位
  var i = 0
  for (var j = 1; j < s.length; j++) {
    for (var k = i; k < j; k++) {
      // 如果出现了重复的字符，停下，记录这个最大串
      if (s[k] === s[j]) {
        // 只有这个最长串的长度大于当前最长我们才更改长度
        maxLength = maxLength < j - i ? j - i : maxLength
        // 将开始的指针i指向重复位置的下一个
        i = k + 1
      }
    }
    // 如果末尾指针走到了头，那么也记录下最大串
    if (j === s.length - 1) {
      maxLength = maxLength < j - i + 1 ? j - i + 1 : maxLength
    }
  }
  return maxLength;
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(lengthOfLongestSubstring('ac'));

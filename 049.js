// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // map: store letter structure
  const map = new Map();

  for (const word of strs) {
    const wordSorted = word.split('').sort().join('');
    if (!map.has(wordSorted)) {
      map.set(wordSorted, [word]);
    }else {
      map.get(wordSorted).push(word);
    }
  }

  const ret = [];
  for (const [_, value] of map.entries() || []) {
    ret.push(value);
  }

  return ret;
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

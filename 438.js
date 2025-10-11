// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const length = p.length;
  const ret = [];
  const pArr = new Array(26).fill(0);
  const sArr = new Array(26).fill(0);
  for (const c of p) {
    const code = c.charCodeAt(0) - 'a'.charCodeAt(0);
    pArr[code]++;
  }

  const diffArr = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  let i = 0, j = length - 1;
  for (const c of s.substr(0, length)) {
    const code = c.charCodeAt(0) - 'a'.charCodeAt(0);
    sArr[code]++;
  }
  while (j < s.length) {
    if (i > 0) {
      const headCode = s[i-1].charCodeAt(0) - 'a'.charCodeAt(0);
      const tailCode = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
      sArr[headCode]--;
      sArr[tailCode]++;
    }
    if (diffArr(pArr, sArr)) ret.push(i);
    i++; j++;
  }

  return ret;
};

/**
 * Test below
 * 下面是测试代码
 */
console.log(findAnagrams("cbaebabacd", "abc"));

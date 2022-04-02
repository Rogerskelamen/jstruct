# leetcode刷题总结

在第三题中，我们又遇到了重复字串的问题，需要考虑到的无非是暴力，当然还有一种更为巧妙的算法-> 滑动窗口。

*我们只需要考虑到下一个重复字符出现在哪里，我么就可以重新定义子串的起始位置*

---

在第四题中运用了稀疏数组的思想

如果要将两个空间进行处理然后产生一个新的结构相同的空间，这时候如果想要不增加新的空间，我们通常会将原先的一个空间扩展变成处理后的数据空间容器。

*如果采取这样的方法，我们最好考虑在存储时将处理好的数据放到较为稀疏的一侧（一般就在扩展空间中），在题目中就是从尾部开始放入数据。这样我们就不用担心在处理的过程中反复更改数据空间的结构*

<u>如果再碰到合并有序数组的问题，应该采取这样的算法</u>

---

第五题回文串问题

> 使用动态规划

```
dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
```

> 如何确定一个字符子串？

Ans: *起始位置，长度，终止位置，三者知晓其二即可*

---

第六题来说的话，主要是理清楚逻辑

<u>对字符串来说，最重要的是结构为指针(因为字符串本质上也就是数组)。</u>

本题就有两种主要思路：

1. 找规律: 把所有的行的规律找出来

2. 直接按照题目思路来用指针遍历字符串

---

第七题

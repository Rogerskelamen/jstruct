# leetcode刷题总结

从第12题开始，不再以leetcode官方顺序来刷题（可能之后会补上），而是找100道最热门的题目来刷

> 原因是部分题目价值较低，甚至有争议

---

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

第九题

因为这题只需要判断当前字符串是不是回文，而不像第五题找出所有回文串。这时候我们就不用动态规划了，直接采用中间向两边扩散的方法。

<u>突然发现扩散法太傻了，实际上可以直接不断比较两端的字符是否相等，到中间就停止即可</u>

---

第11题

又到了双指针第题型。在这个题中，我们需要双指针移动到正确到位置从而满足条件，如果是这样的话，我们使用双指针法，需要思考的是怎么确定移动条件。

我们从两边端点开始每次移动较短的一边，查看是否有体积变大的情况(因为如果固定一边随便缩小的话，宽度会变小体积极大情况也会变小)

总结：<u>如果是类似双指针的题目，那么重点就是怎么选取转移条件</u>

---

第15题

这题如果从本质上来说还是一个双指针的题目，只不过难点在于想到需要将数组进行排序。像这种对数组元素大小做文章的题目一定要想到将数组排序降低问题的混乱度

---

第20题

这一题和第九题较为类似，同样是使用双指针来遍历整个字符串。但是这里就是找到一个指针之后让另一个指针移动，直到移动到原指针的位置，停止搜索。

难点在于如果遍历完所有的括号，也就是主指针怎么移动

<u>完完全全搞错了，这个不应该是使用双指针法，而是使用堆栈</u>

*创建两个堆栈空间，一个用来出栈所有的字符串元素，一个用来接收并且接收后立即进行处理*

---

第21题

又是链表题，两个有序链表合并成一个。那么就有两种情况，一种创建一个新的链表，然后两个链表中的元素插入到这个新链表中。（肯定不好啊，空间复杂度高）那么就选择在第一个链表的基础上插入另一个链表元素

---

第39题

第二次思考的时候就想到了使用回溯，但是自己的回溯代码没怎么训练过，无法实现此题，只有借鉴他人代码。在此将回溯方法总结如下

1. 回溯在英文中写作`backtrack`，实际上就是一种深度优先算法dfs，代码结构上就是递归。最开始使用回溯函数进行解题时需要有一个Base Case，也就是最开始调用函数的初始条件。

2. 在函数体中，首先需要写出函数退出的条件。一种是得到结果停止搜索回溯，一种是搜索到头不用来搜索所以回溯。

3. 在退出条件之后，就是递归体，主要就是递归调用函数，然后在参数调用中更新状态

4. 一般来说，函数的参数会很多，因为函数参数就是这一题的状态变量，所有的状态都当作参数进行更新

---

第83题

主要考察链表的删除操作，这里有两种解法:

1. 使用两重循环，在内层循环中一直找下一个和当前值不同的节点，找到后退出，将该节点给到外层的next

2. 判断下一个节点数据是否和当前节点数据相同，同则删除下一个节点，否则前进一个节点

---

第415题

经典的大数相加，这个题目判断条件多，主要是对于三个数的判断，第一个操作数，第二个操作数和进位。只要有一个不等于0，就需要继续相加，补充高位数字


## 数据结构

`lib`中包含了各种数据结构的大部分处理函数，可以直接引入调用

### 有关链表

`lib/listNode.js`中包含了链表的大部分处理函数，其中链表格式均为<u>不带头节点</u>的链表

### 有关二叉树

`lib/treeNode.js`中包含了二叉树的大部分处理函数

三种遍历顺序分别是根据递归表达式中根节点的访问顺序来区别的，前中后序遍历的分别对应于递归中根节点先访问，中间访问，和最后访问。

## JS刷题的编程技巧

`console.log()`函数默认会在输出后添加换行符，且函数不提供去除换行符的选项，可以使用`process.stdout.write()`避免换行行为(<u>仅node环境</u>)。

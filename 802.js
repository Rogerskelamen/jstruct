// 有一个有 n 个节点的有向图，节点按 0 到 n - 1 编号。图由一个 索引从 0 开始 的 2D 整数数组 graph表示， graph[i]是与节点 i 相邻的节点的整数数组，这意味着从节点 i 到 graph[i]中的每个节点都有一条边。

// 如果一个节点没有连出的有向边，则该节点是 终端节点 。如果从该节点开始的所有可能路径都通向 终端节点 ，则该节点为 终端节点（或另一个安全节点）。

// 返回一个由图中所有 安全节点 组成的数组作为答案。答案数组中的元素应当按 升序 排列。


/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const n = graph.length;
  const color = new Array(n).fill(0);
  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (safe(graph, color, i)) {
      ans.push(i);
    }
  }
  return ans;
};

const safe = (graph, color, x) => {
  if (color[x] > 0) {
    return color[x] === 2;
  }
  color[x] = 1;
  for (const y of graph[x]) {
    if (!safe(graph, color, y)) {
      return false;
    }
  }
  color[x] = 2;
  return true;
}


/**
 * Test below
 * 下面是测试代码
 */
console.log(eventualSafeNodes([[12],[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[]]))

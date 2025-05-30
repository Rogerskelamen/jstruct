// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
// 返回矩阵中 省份 的数量。


/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let n = isConnected.length
  let cnt = 0

  let visited = new Array(n).fill(false)
  let visit = 0

  const dfs = (node) => {
    for (let i = 0; i < n; i++) {
      if (isConnected[node][i] && !visited[i]) {
        visited[i] = true
        dfs(i)
      }
    }
  }

  while (visit < n) {
    if (!visited[visit]) {
      visited[visit] = true
      dfs(visit)
      cnt++
    }
    visit++
  }

  return cnt
};


/**
 * Test below
 * 下面是测试代码
 */
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))

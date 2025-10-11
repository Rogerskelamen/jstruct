

/**
 * 邻接表实现，数据结构如下:
 * Map<str, Array<[str, number]>>
 * @param {[[str, str, number]]} array
 * @returns {Map}
 */
var createAdjacencyList = function(array) {
  const graph = new Map()

  for (const [src, dest, weight] of array) {
    if (!graph.has(src)) graph.set(src, [])
    graph.get(src).push([dest, weight])
  }

  return graph
}


/**
 * @param {Map} graph
 * @param {str} start
 * @returns {Map}
 */
var dijkstra = function(graph, start) {
  // 最重要的就是这两个存储用的数据结构
  const dist = new Map()
  const visited = new Set()

  // 初始化记录最小路径表结构
  for (let node of graph.keys()) {
    dist.set(node, Infinity)
  }
  dist.set(start, 0)

  while (visited.size < graph.size) {
    let u = null;
    let minDist = Infinity
    for (let [node, d] of dist.entries()) {
      if (!visited.has(node) && d < minDist) {
        minDist = d
        u = node
      }
    }

    if (u === null) break
    visited.add(u)

    for (const [node, d] of graph.get(u) || []) { // []为了避免for of语法出现undefined报错
      if (!visited.has(node) && d + minDist < dist.get(node)) {
        dist.set(node, d + minDist)
      }
    }
  }

  return dist
}

/**
 * Test below
 * 下面是测试代码
 */

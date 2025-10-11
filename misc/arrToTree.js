/**
 * @param {object[]} arr
 * @return {object}
 */
var arrToTree = function(arr) {
  const idMap = new Map();
  let root = null;

  // 添加 children 字段并建立 id → node 的映射
  for (const item of arr) {
    item.children = [];
    idMap.set(item.id, item);
  }

  // 建立父子关系
  for (const item of arr) {
    if (item.pid === null) {
      root = item; // 顶层根节点
    } else {
      const parent = idMap.get(item.pid);
      if (parent) {
        parent.children.push(item);
      }
    }
  }

  return root;
}

/**
 * Test below
 * 下面是测试代码
 */
let arr = [
  {pid: null, id: '1', name: '杭州市'},
  {pid: '1', id: '1-1', name: '滨江区'},
  {pid: '1', id: '1-2', name: '萧山区'},
]
let tree = {
  pid: null,
  id: '1',
  name: '杭州市',
  children: [{
    pid: '1',
    id: '1-1',
    name: '滨江区',
    children: []
  }, {
    pid: '1',
    id: '1-2',
    name: '萧山区',
    children: []
  }]
}
console.log(arrToTree(arr))

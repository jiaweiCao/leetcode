```
    1
   /  \
  2    3
 / \  /  \
4   5 6   7
```

- 前序遍历 // 1 - 2 - 4 - 5 - 3 - 6 - 7
- 中序遍历 // 4 - 2- 5 -1 - 6 - 3 -7
- 后序遍历 // 4 - 5 - 2 -6 - 7 - 3 -1

## 递归模版

### 前序遍历

```
function dfs (root) {
  if (!root) {
    return
  }
  console.log(root.val)
  dfs(root.left)
  dfs(root.right)
}
```

### 中序遍历

```
function dfs (root) {
  if (!root) {
    return
  }
  dfs(root.left)
    console.log(root.val)
  dfs(root.right)
}
```

### 后序遍历

```
function dfs (root) {
  if (!root) {
    return
  }
  dfs(root.left)
  dfs(root.right)
  console.log(root.val)
}
```

## 迭代模版

### 前序遍历 a

```
function dfs(root) {
  let stack = [root] // 一开始根节点入栈
  let allNode = []  // 所有节点按顺序储存
  while (stack.length > 0) {
    const cur = stack.shift() // 模拟栈顶 出栈操作

    allNode.push(cur.val) // 这一步为具体操作

    if (cur.right) {
      stack.unshift(cur.right) // 先将右子树 推进栈
    }
    if (cur.left) {
      stack.unshift(cur.left) // 后将左子树推进栈
    }
  }
}
```

### 前序遍历 b

```
function dfs(root) {
  let cur = root     // 当前节点
  let stack = [] // 一开始根节点入栈
  let allNode = []  // 所有节点按顺序储存

  while (cur || stack.length > 0) {
    while (cur) {
      allNode.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    const popItem = stack.pop()
    cur = popItem.right
  }
  return allNode;
}
```

### 中序遍历

```
function dfs(root) {
  let cur = root     // 当前节点
  let stack = [] // 一开始根节点入栈
  let allNode = []  // 所有节点按顺序储存

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    const popItem = stack.pop()
    allNode.push(popItem.val)
    cur = popItem.right
  }
  return allNode
}
```

### 后续遍历

```
function dfs(root) {

  let stack = [ {flag: 0, node: root}]

  let result = []

  while (stack.length > 0) {
      // 从栈中取出来
      const popItem = stack.pop()
    if (flag === 1) {
      result.push(popItem.node.val)
    } else {
      // 将当前置为1 入栈，下次直接取。
      stack.push({flag: 1, node: popItem.node})

      if (popItem.node.right) {
        // 如果有右节点则右边先入栈
        stack.push({flag: 0, node: popItem.node.right})
      }
      if (popItem.node.left) {
        // 左边后入栈 - 保持左在栈的在外层，第一个出去
        stack.push({flag: 0, node: popItem.node.left})
      }
    }
  }
  return result
}
```

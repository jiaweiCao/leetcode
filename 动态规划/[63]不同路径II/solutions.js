/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * dp[i][j] 表示在[i][j]时有dp[i][j]种可能。
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = [];
  /**
   * dp数组初始化，注意不要用 fill来填充引用类型。否则所有子项公用一个地址
   */
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp.push(new Array(obstacleGrid[0].length).fill(0));
  }

  /** 如果第一项就是石头则直接返回 */
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  /** 初始条件 */
  dp[0][0] = 1;

  /** 两个边界如果前一个有阻碍，或本身就是石头，或者必经之路可能性为0,则到达当前位置可能性为0 */

  /** 纵向初始化 */
  for (let i = 1; i < obstacleGrid.length; i++) {
    dp[i][0] =
      obstacleGrid[i - 1][0] === 1 ||
      obstacleGrid[i][0] === 1 ||
      dp[i - 1][0] === 0
        ? 0
        : 1;
  }
  /** 横向初始化 */
  for (let i = 1; i < obstacleGrid[0].length; i++) {
    dp[0][i] =
      obstacleGrid[0][i - 1] === 1 ||
      obstacleGrid[0][i] === 1 ||
      dp[0][i - 1] === 0
        ? 0
        : 1;
  }

  /** 尝试所有路径 */
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (
        (obstacleGrid[i - 1][j] === 1 && obstacleGrid[i][j - 1] === 1) ||
        obstacleGrid[i][j] === 1 ||
        (dp[i - 1][j] === 0 && dp[i][j - 1] === 0)
      ) {
        /** 如果路径堵死，或者自己就是石头，或是必经之路可能性为0,则到达该点可能性为0 */
        dp[i][j] = 0;
      } else if (obstacleGrid[i - 1][j] === 1) {
        /** 左侧是石头，则可能性是上方的可能性 */
        dp[i][j] = dp[i][j - 1];
      } else if (obstacleGrid[i][j - 1] === 1) {
        /** 上方是石头，则可能性是左侧的可能性 */
        dp[i][j] = dp[i - 1][j];
      } else {
        /** 没有任何阻碍则当前位置可能性是上方可能性+下方可能性 */
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  /** 返回最后一个格子的可能性 */
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

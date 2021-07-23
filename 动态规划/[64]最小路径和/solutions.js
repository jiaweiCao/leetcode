/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * dp[i][j]为当前格子的最小数
 * dp[i][j] = dp[i][j-1]+dp[i-1][j]
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));
  let mSum = 0;
  for (let i = 0; i < m; i++) {
    mSum += grid[i][0];
    dp[i][0] = mSum;
  }
  let nSum = 0;
  for (let i = 0; i < n; i++) {
    nSum += grid[0][i];
    dp[0][i] = nSum;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};

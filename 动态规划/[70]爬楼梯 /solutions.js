/**
 * @param {number} n
 * @return {number}
 */

/**
 * 深搜（该解法会超时）
 */
var climbStairs = function (n) {
  let result = 0;
  const bfs = (sum) => {
    if (sum > n) {
      return;
    }
    if (sum === n) {
      result += 1;
      return;
    }

    bfs(sum + 1);
    bfs(sum + 2);
  };
  bfs(0);
  return result;
};

/**
 * 动态规划
 */

var climbStairs2 = function (n) {
  const dp = [1, 2];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
console.log(climbStairs2(5));

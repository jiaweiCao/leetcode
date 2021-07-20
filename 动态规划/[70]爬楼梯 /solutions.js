/**
 * @param {number} n
 * @return {number}
 */

/**
 * 回溯（该解法会超时）
 */
var climbStairs = function (n) {
  let result = 0;
  const backTracking = (sum) => {
    if (sum > n) {
      return;
    }
    if (sum === n) {
      result += 1;
      return;
    }

    backTracking(sum + 1);
    backTracking(sum + 2);
  };
  backTracking(0);
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

/**
 * @param {number[]} nums
 * @return {number}
 */
/** 首刷，暴力破解 */
var maxSubArray = function (nums) {
  let finalResult = -Infinity;
  for (let i = 0; i < nums.length; ++i) {
    let e = i + 1;
    let presum = nums[i];
    let curTurnMax = presum;
    while (e < nums.length) {
      const curSum = presum + nums[e];
      curTurnMax = Math.max(curTurnMax, curSum);
      presum = curSum;
      e++;
    }
    finalResult = finalResult >= curTurnMax ? finalResult : curTurnMax;
  }
  return finalResult;
};

/**
 *  二刷
 * 贪心: 贪子区间，如果子区间为负数 则立刻选取区间下一位做统计
 */
var maxSubArray2 = function (nums) {
  let finalResult = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    count += nums[i];
    if (finalResult < count) {
      finalResult = count;
    }
    if (count < 0) {
      count = 0;
    }
  }
  return finalResult;
};

console.log(maxSubArray2([-1]));

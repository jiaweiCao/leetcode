/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let result = Infinity;
  let start = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    while (sum >= target) {
      const sublength = i - start + 1;
      result = Math.min(result, sublength);
      sum -= nums[start++];
    }
  }

  return result === Infinity ? 0 : result;
};

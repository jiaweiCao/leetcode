/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    const ab = Math.abs(nums[i]);
    nums[i] = ab * ab;
  }
  nums.sort((a, b) => a - b);
  return nums;
};

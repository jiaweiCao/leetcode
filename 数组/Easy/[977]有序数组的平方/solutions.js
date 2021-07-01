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

// 二刷：双指针

var sortedSquares2 = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  const result = [];

  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result.unshift(nums[start] * nums[start]);
      start += 1;
    } else {
      result.unshift(nums[end] * nums[end]);
      end -= 1;
    }
  }
  return result;
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]));

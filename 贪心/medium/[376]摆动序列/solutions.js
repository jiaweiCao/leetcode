/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 1) {
    return 1;
  }
  let result = 1;
  let pre = 0;

  for (let i = 0; i <= nums.length; ++i) {
    const cur = nums[i + 1] - nums[i];
    if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
      pre = cur;
      result += 1;
    }
  }
  return result;
};
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));

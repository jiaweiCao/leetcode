/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i];
    if (map.get(key) !== undefined) {
      return [map.get(key), i];
    }
    map.set(nums[i], i);
  }
};

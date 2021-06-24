/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 首刷
 * 思路：这道题O(n)方法直接求解就浪费了这么题干，既然有序，那先用二分法做，每次找到一个区间，一定有一边是升序
 */
var search = function (nums, target) {
  let result = -1;
  if (!Array.isArray(nums) || nums.length === 0) {
    return result;
  }
  const binary = (left, right) => {
    const mid = (left + right) >> 1;
  };
  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const maxLength = nums1.length + nums2.length;
  if (maxLength === 0) {
    return null;
  }
  const resultArr = [];
  for (let i = 0; i < maxLength; i++) {
    const fir1 = nums1[0] ?? Infinity;
    const fir2 = nums2[0] ?? Infinity;
    const item = fir1 < fir2 ? nums1.shift() : nums2.shift();
    resultArr.push(item);
  }
  if (maxLength % 2 !== 0) {
    const mid = maxLength >>> 1;
    return resultArr[mid];
  } else {
    const rightMid = maxLength >>> 1;
    return (resultArr[rightMid] + resultArr[rightMid - 1]) / 2;
  }
};

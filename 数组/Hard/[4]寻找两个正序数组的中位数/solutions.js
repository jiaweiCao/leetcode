/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * 首刷
 * @思路
 * 0.先将两个数组合并，排序
 * 1.判断奇偶性
 * 2.奇则将length除以2后向下取整得到 i
 * 3.偶则为length除以2 得到i, 然后取(newNums[i - 1] + newNums[i]) /2
 * 4.注意i - 1 > 0
 */

var findMedianSortedArrays = function (nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    return null;
  }
  // nums1计数器
  let j = 0;
  // nums2 计数器
  let k = 0;
  // 新的有序数组
  let orderArr = [];

  for (let i = 0; i < nums1.length + nums2.length; i++) {
    /** 如果短的数组到头了则 */
    if (nums1[j] === undefined) {
      j = -1;
    }
    if (nums2[k] === undefined) {
      k = -1;
    }

    if (j !== -1 && k !== -1) {
      /** 如果两个下标都有值 */
      if (nums1[j] < nums2[k]) {
        /** 比较哪一个小，注入数组，同时小的计数器+1 */
        orderArr.push(nums1[j]);
        j += 1;
      } else {
        orderArr.push(nums2[k]);
        k += 1;
      }
    } else if (j === -1 && k !== -1) {
      /** nums1 数组已经遍历完，直接取nums2即可 */
      orderArr.push(nums2[k]);
      k += 1;
    } else if (k === -1 && j !== -1) {
      /** nums2 数组已经遍历完，直接取nums1即可 */
      orderArr.push(nums1[j]);
      j += 1;
    } else {
      /** 都等于-1，这时一定遍历到了最后，什么事都不用做 */
      break;
    }
  }
  if (orderArr.length === 1) {
    return orderArr[0];
  }

  /** 根据奇偶性判断 */
  if (orderArr.length % 2 === 0) {
    const i = orderArr.length / 2;
    return (orderArr[i] + orderArr[i - 1]) / 2;
  } else {
    const i = Math.floor(orderArr.length / 2);
    return orderArr[i];
  }
};

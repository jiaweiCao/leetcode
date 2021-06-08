/**
 * @param {string} s
 * @return {number}
 */

/**
 * 首刷
 * @思路 固定指针，另一个指针向后移动，每移动一次记录一下值，直到匹配到相同的字符串，保存不重复的子串长度，固定指针++
 * 1.每一次需要判断 str.length - 固定指针下表 长度是否小于已有的 最大字串长度，如果是，则跳出循环。
 * 2.用map记录下每次移动指针的值，如果固定指针移动，则清空map
 */
var lengthOfLongestSubstring = function (str) {
  if (str && str.length === 1) {
    return 1;
  }
  let maxSonLength = 0;
  // i 就是固定锚点，每次往前进以为
  for (let i = 0; i < str.length; i++) {
    let map = new Map();
    if (str.length - i < maxSonLength) {
      /** 如果当前锚点的位置后面还剩下的字符 还没有已有不重复的子字符串多，那么直接退出 */
      break;
    }
    let movePoint = i + 1; // 移动锚点起始位置
    map.set(str[i], i);
    while (str.length - 1 - movePoint >= 0) {
      if (map.get(str[movePoint]) !== undefined) {
        /** 如果找到重复则记录最大字串并退出循环 */
        maxSonLength =
          movePoint - i > maxSonLength ? movePoint - i : maxSonLength;
        break;
      } else if (str.length - 1 - movePoint === 0) {
        /** 如果找到最后一个，则最后一位也是一个所以需要+1*/
        maxSonLength =
          movePoint - i + 1 > maxSonLength ? movePoint - i + 1 : maxSonLength;
        break;
      } else {
        map.set(str[movePoint], movePoint);
        movePoint += 1;
      }
    }
  }
  return maxSonLength;
};
console.log(lengthOfLongestSubstring("ab"));

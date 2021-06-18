/**
 * @param {string} s
 * @return {string}
 */
/**
 * 首刷
 * 思路：固定头指针，如果发现相同的再移动头指针，并且做一个map结构，储存已有的数据，每一次i前进，都会比较之前所有的字符
 * i 是一个天然的尾指针,这里的i，天然为1 因为要比startpointer多一个，不然没有意义
 */
var longestPalindrome = function (s) {
  if (s.length <= 2) {
    return 2;
  }
  let maxSubLength = 0;
  let pointer = 0;
  const map = new Map();
  for (let i = 1; i < s.length - 1; i++) {
    let subPointer = pointer;

    while (subPointer <= i) {
      if (map.get(s[i]) !== undefined) {
        maxSubLength = Math.max(maxSubLength, i - 1 - subPointer + 1);
        pointer = map.get(s[i]);
        subPointer = pointer;
      } else {
        subPointer += 1;
      }
      if (map.get(s[i])) {
        maxSubLength = Math.max(maxSubLength, i - 1 - subPointer + 1);
        map.delete(s[pointer]);
        pointer += 1;
        subPointer = pointer;
      } else {
        subPointer += 1;
      }
    }
    map.set(s[i], i);
  }
};

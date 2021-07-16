/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; ++i) {
    const sortArrItem = Array.from(strs[i]);
    const a = sortArrItem.sort();
    const b = a.join("");
    if (map.get(b)) {
      map.get(b).push(strs[i]);
    } else {
      map.set(b, [strs[i]]);
    }
  }
  return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * 首刷
 * 该解法时间复杂度n^2
 */
 var maxArea = function(height) {
    let startPoint = 0
    let max = 0
    while (startPoint <= height.length - 1) {
        for(let i = startPoint + 1; i <= height.length - 1; i++) {
            const minHight = Math.min(height[i], height[startPoint])
            const need = minHight * (i - startPoint)
            max = Math.max(max, need)
        }
        startPoint += 1
    }
    return max
};


/**
 * 双指针算法，时间复杂度O(n)
 */
var maxArea = function(height) {
    let start = 0
    let end = height.length - 1
    let max = 0
    while(start < end) {
        const area = Math.min(height[start], height[end]) * (end - start)
        max = Math.max(max, area)
        if (height[start] >= height[end]) {
            end -= 1
        } else {
            start += 1
        }
    }
    return max
};
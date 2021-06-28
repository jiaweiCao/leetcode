/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = []
    const path = []

    const backTracking = (cur) => {
        if (cur > nums.length) {
            return
        }
        result.push(Array.from(path))
        for(let i = cur; i<nums.length; ++i) {
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
    }
    backTracking(0)
    return result
};
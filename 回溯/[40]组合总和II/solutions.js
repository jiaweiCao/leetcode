/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * 首刷没有做出来，看了答案，有了点思路
 * 思路：
 * 1. 首先要保证 树层 的不能重复，树枝上面可以重复（即 一个item里可以有重复元素，但是两个item不能是重复的组合）
 * 2. 需要一个used，当 cur[index] === cur[index - 1]时， true 则在树枝 上递归，可以添加，false 则是已经在同层上，需要过虑掉。
 * 3. 因为只比较这一次与上一次，所以需要排序
 */
 var combinationSum2 = function(candidates, target) {
    const result = []

    const sortCandidates = candidates.sort()

    const backTracking = (path, curIndex, sum, used) => {
                
        if (sum > target) {
                return
        }
    
        if (sum === target) {
            result.push(path)
            return
        }

        for(let i = curIndex; i < sortCandidates.length; ++i) {
            if (i > 0 && sortCandidates[i] === sortCandidates[i - 1] && used === false) {
                continue
            }
            used = true
        
            backTracking([...path, sortCandidates[i]], i + 1, sum + sortCandidates[i], used)

            used = false
        }
    }

    backTracking([], 0, 0, false)
    return result
};
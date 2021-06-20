/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const map = new Map([['(', ')'], ['[', ']'], ['{', '}']])
    let stack = []
    for (let cur of s) {
        if (map.has(cur)) {
            stack.push(cur)
        } else {
            if (stack.length === 0) {
                return false
            }
            const item = stack.pop()
            if (map.get(item) !== cur) {
                return false
            }
        }
    }
    return stack.length === 0
};
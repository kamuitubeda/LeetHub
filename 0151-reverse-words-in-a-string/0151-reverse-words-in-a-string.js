/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let trimmed = s.trim()
    let regexPattern = /\s+/g
    let ans = trimmed.replace(regexPattern, " ")
    let arr = ans.split(" ")
    let reversed = arr.reverse()
    let result = reversed.join(" ")
    
    return result
};
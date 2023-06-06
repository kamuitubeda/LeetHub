/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let txt = s.trim();
    let arr = txt.split(" ");
    let idx = arr.length;
    
    let lastWord = arr[idx-1];
    let result = lastWord.length;
    
    return result;
};
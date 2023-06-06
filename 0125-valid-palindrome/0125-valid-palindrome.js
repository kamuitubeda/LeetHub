/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let txt = s.trim().toLowerCase();
    let str = txt.replace(/[^a-z0-9]/gi, '');
    
    if(str == "" || str.length == 1) return true;
    let left = 0;
    let right = str.length - 1;
    
    while(left <= right) {
        if(str[left] != str[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return str;
};
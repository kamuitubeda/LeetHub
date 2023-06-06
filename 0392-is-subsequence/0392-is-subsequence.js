/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    let found = 0;
    if(s.length < 1) return true;
    
    while(i < t.length) {
        if(s[j] == t[i]) {
            found++;
            j++;
        } 
        
        if(found == s.length) return true;

        i++;
    }
    
    return false;
};
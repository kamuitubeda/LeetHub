/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var length = (word1.length > word2.length) ? word1.length : word2.length;
    var merged = [];
    
    let idx = 0;
    let idx2 = 1;
    for(let i=0; i<length; i++) {
        merged[idx] = (word1[i] === null) ? ' ' : word1[i];
        merged[idx2] = (word2[i] === null) ? ' ' : word2[i];
        
        idx += 2;
        idx2 += 2;
    }
    
    return merged.join('');
};
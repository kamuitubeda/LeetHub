/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length<=numRows || numRows<2){
        return s;
    }
    let arr = new Array(numRows).fill(""); 
    let row = 0;
    let idx = 0;
    
    while(idx < s.length) {
        if(row == numRows-1) {
            direction = -1;
        }
        if(row == 0) {
            direction = 1;
        }
        arr[row] += s[idx];
        idx++;
        row += direction;
    }
    
    return arr.join('');
};
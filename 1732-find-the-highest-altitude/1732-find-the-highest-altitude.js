/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    var max = 0
    var val = 0
    
    for(let i=0; i<gain.length; i++) {
        val = val + gain[i]
        if(max < val) max = val
    }
    
    return max
};
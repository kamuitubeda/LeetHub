/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var result = []
    var max = Math.max(...candies)
    for(let i=0; i<candies.length; i++) {
        result[i] = (candies[i] + extraCandies) >= max ? true : false
    }
    
    return result
};
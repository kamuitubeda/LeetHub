/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var counter = 0;
    for(let i=0; i<operations.length; i++) {
        if(operations[i] == "++X" || operations[i] == "X++") counter++
        if(operations[i] == "--X"|| operations[i] == "X--") counter--
    }
    return counter
};
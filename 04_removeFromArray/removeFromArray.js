const removeFromArray = function() {
    // arguments[] is an array of arguments this function receives.
    // arguments[0] is the array where items may need to be removed.
    // starting from arguments[1] are the items that need to be removed from the array.

    // The for loops starts from 1 as arguments[0] is the array that's passed in.
    for (let i = 1; i < arguments.length; i++) {
        for (let index = 0; index < arguments[0].length; index++) {
            if (arguments[0][index] === arguments[i]) {
                arguments[0].splice(index, 1)
            } 
        }   
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;

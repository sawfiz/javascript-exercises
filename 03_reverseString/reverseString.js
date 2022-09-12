const reverseString = function(string) {
    let len = string.length;
    let newString = "";
    for (i=len; i>=0; i--) {
        newString = newString + string.charAt(i);
    }
    return newString;
};

// reverseString("Hello")

// Do not edit below this line
module.exports = reverseString;

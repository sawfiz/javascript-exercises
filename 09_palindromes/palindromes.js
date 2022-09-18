const palindromes = function (string) {
    const cleanedString = string.replace(/[^A-Za-z]/g, "").toLowerCase();
    // console.log(cleanedString);
    const reversedString = reverseString(cleanedString);
    return reversedString === cleanedString ? true : false;
};

function reverseString(str) {
    return str.split("").reverse().join("");
}

// console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;

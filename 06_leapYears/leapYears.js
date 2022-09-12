const leapYears = function (year) {
    // if (year % 4 !== 0) {
    //     return false;
    // }
    // if (year % 100 === 0 && year % 400 !== 0) {
    //     return false;
    // }
    // return true;

    // Use logic A and (not B) + C
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;

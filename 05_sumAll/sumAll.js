const sumAll = function (a, b) {
    // Check if negative numbers
    if (a < 0 || b < 0) {
        return "ERROR";
    }

    // Check if non-numbers
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }

    // Start should be smaller than end
    start = a < b ? a : b;
    end = a < b ? b : a;

    // Calculate the sum.
    let sum = 0;
    for (num = start; num <= end; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

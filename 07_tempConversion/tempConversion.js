const ftoc = function (degreeF) {
    // let degreeC = (degreeF -32) * 5 / 9;
    // if (Number.isInteger(degreeC)) {
    //   return degreeC;
    // }
    // else {
    //   return +degreeC.toFixed(1);
    // }

    // Use round(number * 10) /10 to achieve 1 decimal, and no decimal if integer
    return Math.round((((degreeF - 32) * 5) / 9) * 10) / 10;
};

const ctof = function (degreeC) {
    // let degreeF = degreeC * 9 / 5 + 32;
    // if (Number.isInteger(degreeF)) {
    //   return degreeF;
    // }
    // else {
    //   return +degreeF.toFixed(1);
    // }

    // Use round(number * 10) /10 to achieve 1 decimal, and no decimal if integer
    return Math.round((degreeC * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};

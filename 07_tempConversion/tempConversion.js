const ftoc = function(degreeF) {
  let degreeC = (degreeF -32) * 5 / 9;
  if (Number.isInteger(degreeC)) {
    return degreeC;
  }
  else {
    return +degreeC.toFixed(1);
  }
};

const ctof = function(degreeC) {
  let degreeF = degreeC * 9 / 5 + 32;
  if (Number.isInteger(degreeF)) {
    return degreeF;
  }
  else {
    return +degreeF.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

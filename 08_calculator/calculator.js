const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    return array.reduce(getSum, 0);
};

function getSum(total, num) {
    return total + num;
}

const multiply = function (array) {
    return array.reduce(getProduct, 1);
};

function getProduct(product, num) {
    return product * num;
}

const power = function (base, power) {
  return base ** power;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};

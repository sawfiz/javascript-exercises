const fibonacci = function(n) {
    if (+n < 1) {
        return "OOPS"
    } else if (+n === 1 || +n === 2) {
        return 1;
    } else {
        return fibonacci(+n - 1) + fibonacci(+n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;

const fibonacci = function (n) {

    if (n < 0) {
        return "OOPS"
    }

    if (n == 1 || n == 2) {
        return 1
    }

    let prev = 1
    let current = 1, newNumber = 0;
    for (let i = 3; i <= n; i++) {
        newNumber = prev + current
        prev = current
        current = newNumber
    }

    console.log(newNumber)
    return newNumber
};

fibonacci(6)

// Do not edit below this line
module.exports = fibonacci;

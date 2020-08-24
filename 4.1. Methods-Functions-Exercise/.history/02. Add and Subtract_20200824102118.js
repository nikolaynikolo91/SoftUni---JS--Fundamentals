function solve(a, b, c) {

    function sum(a, b) {
        return a + b
    }

    function subtract(a, b) {
        return a - b
    }

    return subtract(sum(a, b), c)
}

console.log(solve(23,
    6,
    10
))
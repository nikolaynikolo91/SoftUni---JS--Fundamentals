function solve(numOne, numTwo, operator) {
    // 'multiply', 'divide', 'add', 'subtract'
    let obj = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    }

    return (obj[operator](numOne, numTwo))
}

solve(5,
    5,
    'multiply'
)
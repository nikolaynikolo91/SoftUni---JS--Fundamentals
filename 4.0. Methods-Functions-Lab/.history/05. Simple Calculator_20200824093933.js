function solve(numOne, numTwo, operator) {
    // 'multiply', 'divide', 'add', 'subtract'
    let obj = {
        'multiply': (numOne, numTwo) => numOne * numTwo,
        'divide': (numOne, numTwo) => console.log(numOne / numTwo),
        'add': (numOne, numTwo) => console.log(numOne + numTwo),
        'subtract': (numOne, numTwo) => console.log(numOne - numTwo)
    }

    console.log(obj[operator](numOne, numTwo))
}

solve(5,
    5,
    'multiply'
)
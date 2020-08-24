function solve (numOne, numTwo, operator) {
   // 'multiply', 'divide', 'add', 'subtract'
    let obj ={
        'multiply': ()=> numOne * numTwo, 
        'divide': ()=> console.log(numOne / numTwo),
        'add': ()=> console.log(numOne + numTwo),
        'subtract': ()=> console.log(numOne - numTwo)
    }

    console.log(obj[operator])
}

solve (5,
    5,
    'multiply'
    )
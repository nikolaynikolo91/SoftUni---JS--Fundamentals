function processOddNumbers(input) {

    let arr = [];

    for (let i = 1; i <= input.length; i++) {
        if (i % 2 == 0) {
            arr.push(Math.pow(input[i], 2))
        }
    }

    arr = arr.sort((a, b) => a - b);

    console.log(arr)
}

processOddNumbers([10, 15, 20, 25])
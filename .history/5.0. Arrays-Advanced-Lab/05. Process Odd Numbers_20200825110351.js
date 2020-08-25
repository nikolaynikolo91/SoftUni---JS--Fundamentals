function processOddNumbers(input) {

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 1 && i != 0) {
            arr.push(input[i])
        }
    }

    arr = arr.sort((a, b) => a - b);

    console.log(arr)
}

processOddNumbers([10, 15, 20, 25])
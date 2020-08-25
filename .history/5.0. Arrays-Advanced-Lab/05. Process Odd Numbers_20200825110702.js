function processOddNumbers(input) {

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 1) {
            arr.unshift(input[i] * 2)
        }
    }

    // arr = arr.sort((a, b) => b - a);

    console.log(arr)
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])
function smallestTwoNumbers(input) {

    let arr = input.sort((a, b) => a - b).slice(0, 2);
    console.log(arr.join(' '))
}


smallestTwoNumbers([30, 15, 50, 5])
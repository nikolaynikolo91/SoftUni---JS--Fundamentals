function solve(input) {
    let n = input[0];

    let arr = input.slice(1);

    let firstArr = arr.slice(0, n);
    let secondArr = arr.slice(n);

    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));
}

solve([2,
    7, 8, 9
])
function solve(input) {
    let n = input[0];

    let arr = input.slice(1);

    let firstArr = input.slice(1, n);
    let secondArr = input.slice(-n);

    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));
}

// solve([2,
//     7, 8, 9
// ])

solve([3,
    6, 7, 8, 9
])
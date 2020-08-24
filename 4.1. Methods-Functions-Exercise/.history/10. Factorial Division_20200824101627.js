function solve(a, b, c) {
    let arr = [];
    arr.push(a, b, c);

    let sorted = arr.sort((a, b) => a - b);
    let smallestNumber = sorted[0];

    console.log(smallestNumber)
}

solve(2,
    5,
    3
)
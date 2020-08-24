function solve(a, b, c) {
    let arr = [];
    arr.push(a, b, c);

    let sorted = arr.sort((a, b) => a - b);

    console.log(sorted)
}

solve (2,
    5,
    3
    )
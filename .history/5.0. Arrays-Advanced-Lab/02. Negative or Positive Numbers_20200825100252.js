function solve(input) {
    let positive = input.slice(0);
    positive = positive.filter((x) => x >= 0);
    console.log(positive)
}

solve([7, -2, 8, 9])
function solve(input) {
    let positiveArr = input.slice(0);
    positiveArr = positiveArr.filter((x) => x >= 0);

    let negativeArr = input.slice(0);
    negativeArr = negativeArr.filter((x) => x < 0);
    console.log(positiveArr)
    console.log(negativeArr)

    let output = negativeArr.concat(positiveArr)

    console.log(output)
}

solve([7, -2, 8, 9])
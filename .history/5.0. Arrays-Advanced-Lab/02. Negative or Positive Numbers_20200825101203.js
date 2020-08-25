function solve(input) {
    let positiveArr = input.slice(0);
    positiveArr = positiveArr.filter((x) => x >= 0);

    let negativeArr = input.slice(0);
    negativeArr = negativeArr.filter((x) => x < 0).sort((a, b) => b - a)


    // console.log(positiveArr)
    // console.log(negativeArr)

    let output = [...negativeArr, ...positiveArr]

  //  console.log(output.join('\n'))

    for (const element of output) {
        console.log(element)
    }
}

//solve([7, -2, 8, 9])
solve([3, -2, 0, -1])
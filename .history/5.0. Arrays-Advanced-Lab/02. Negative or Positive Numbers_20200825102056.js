function solve(input) {
    // let positiveArr = input.slice(0);
    // positiveArr = positiveArr.filter((x) => x > 0).sort((a, b) => a - b);

    // let zeroArr = input.slice(0);
    // zeroArr = zeroArr.filter((x) => x == 0);

    // let negativeArr = input.slice(0);
    // negativeArr = negativeArr.filter((x) => x < 0).sort((a, b) => b - a)


    // // console.log(positiveArr)
    // // console.log(negativeArr)

    // let output = [...negativeArr, ...positiveArr, ...zeroArr]

    // //  console.log(output.join('\n'))

    // for (const element of output) {
    //     console.log(element)
    // }
    let arr = [];

    for (const element of input) {
        if (element >= 0) {
            arr.push(element)
        } else {
            arr.unshift(element)
        }
    }

    //console.log(arr)

    for (const item of arr) {
        console.log(item)
    }

}

solve([7, -2, 8, 9])
//solve([6, 3, -2, 5, 0, -1])
function solve(params) {

    let numArr = params.map((x) => Number(x));

    while (numArr.length > 1) {
        let condense = []
        for (let i = 0; i < numArr.length - 1; i++) {
            condense[i] = numArr[i] + numArr[i + 1];

        }
        numArr = condense;
    }

    console.log(numArr.join(''))
}

//solve([2, 10, 3])
solve([5, 0, 4, 1, 2])
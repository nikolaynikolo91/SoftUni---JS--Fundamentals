function solve(param) {

    let str = param.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 == 0) {
            oddSum += +str[i]

        } else {
            evenSum += +str[i]
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(1000435)
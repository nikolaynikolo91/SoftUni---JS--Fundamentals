function solve(input1, input2) {
    let areEqual = true;

    let arr1 = input1.map((x) => Number(x));
    let arr2 = input2.map((x) => Number(x));

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] != arr1[i]) {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                areEqual = false;
                break;
            }
        }
    }

    if (areEqual) {
        let sum = arr1.reduce((a, b) => +a + +b);
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}

solve(['10', '20', '30'], ['10', '20', '30', '0'])
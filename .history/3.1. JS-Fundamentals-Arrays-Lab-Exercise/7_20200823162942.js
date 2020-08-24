function solve(input) {
    let output = [];
    for (let i = 0; i < input.length - 1; i++) {
        let equalNum;

        let element = input[i];
        arr.push(element)
        let arr = [];

        for (let j = i + 1; j < input.length - 1; j++) {
            if (element == input[j]) {
                arr.push(input[j]);
            } else {
                break;
            }
        }

        output.push(arr.join(''));
    }

    console.log(output)
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
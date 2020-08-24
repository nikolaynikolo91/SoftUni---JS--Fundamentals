function solve(input) {
    let output = [];
    for (let i = 0; i < input.length - 1; i++) {
        let equalNum;

        let element = arr[i];
        arr.push(element)
        let arr = [];

        for (let j = i + 1; j < input.length - 1; j++) {
            if (element == arr[j]) {
                arr.push(arr[j]);
            } else {
                break;
            }
        }

        output.push(arr.join(''));
    }

    console.log(output)
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
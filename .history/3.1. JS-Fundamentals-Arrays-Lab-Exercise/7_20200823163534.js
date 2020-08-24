function solve(input) {
    let output = [];

    for (let i = 0; i < input.length - 1; i++) {

        let element = input[i];
        let arr = [];
        arr.push(element);

        for (let j = i + 1; j < input.length - 1; j++) {
            if (element == input[j]) {
                arr.push(input[j]);
            } else {
                break;
            }
        }

        output.push(arr.join(''));
    }
let sortedOutput = output.sort((a,b) => b.length-a.length);
    console.log(sortedOutput)
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve ([0, 1, 1, 5, 2, 2, 6, 3, 3])
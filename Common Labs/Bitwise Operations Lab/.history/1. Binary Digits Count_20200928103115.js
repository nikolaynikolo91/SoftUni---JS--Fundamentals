function solve(arr) {
    let n = arr[0];
    let b = arr[1];

    let decToBinary = n.toString(2)
    let countOfBinary = 0;

    for (let i = 0; i < decToBinary.length; i++) {
        const element = decToBinary[i];
        if (b == element) {
            countOfBinary++;
        }
    }

    console.log(countOfBinary)

}

solve([20, 0])
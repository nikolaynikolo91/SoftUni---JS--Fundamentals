function solve(n, b) {
 

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

solve(20, 0)
solve(15, 1)
solve(10, 1)
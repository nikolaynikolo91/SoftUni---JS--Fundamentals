function solve(n) {
    let sum = 0;
    for (let i = 0; i < n * 2; i++) {

        if (i % 2 == 1) {
            console.log(i)
            sum += i;
        }
    }

    console.log(`Sum: ${sum}`)
}

solve(5)
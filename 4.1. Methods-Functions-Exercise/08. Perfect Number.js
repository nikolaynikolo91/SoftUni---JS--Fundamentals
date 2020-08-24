function solve(num) {

    let sum = 0;

    for (let i = 1; i < num; i++) {
        const element = num

        if (num % i == 0) {
            sum += i;
        }
    }

    if (sum == num) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }
}

solve(1236498)
//solve (6)
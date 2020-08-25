function solve(input) {

    let arr = [];

    for (const element of input) {
        if (element >= 0) {
            arr.push(element)
        } else {
            arr.unshift(element)
        }
    }

    for (const item of arr) {
        console.log(item)
    }

}

solve([7, -2, 8, 9])
//solve([6, 3, -2, 5, 0, -1])
function solve(order, num) {
    //     •	coffee - 1.50
    // •	water - 1.00
    // •	coke - 1.40
    // •	snacks - 2.00

    let obj = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }

    return obj[order] * num
}

console.log(solve('water',
    5
))
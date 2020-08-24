function solve(order, num) {

    let obj = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }

    console.log((obj[order] * num).toFixed(2))
}

solve('water',
    5
)
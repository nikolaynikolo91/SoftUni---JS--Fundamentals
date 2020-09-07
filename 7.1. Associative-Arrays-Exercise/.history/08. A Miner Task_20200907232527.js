function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        obj[input[i]] = input[i + 1]

    }

    console.log(obj)
}


solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
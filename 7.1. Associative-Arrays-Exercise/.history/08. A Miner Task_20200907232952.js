function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        if (!obj.hasOwnProperty(input[i])) {

            obj[input[i]] = Number(input[i + 1]);
        } else {
            obj[input[i]] += Number(input[i + 1]);
        }

    }

    for (const key in obj) {
       console.log(`${key} -> ${obj[key]}`)
    }
}


// solve([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])

solve ([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])
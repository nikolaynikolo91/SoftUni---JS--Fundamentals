function solve(input) {

    let sum = 0;
    let taxes = 0
    let typeOrder = '';

    for (const line of input) {
        let num = +line;
        if (num < 0) {
            console.log('Invalid price!')
        }

        if (line === 'special' || line === 'regular') {
            typeOrder += line;
            break;
        }
        sum += num;
        taxes += num * 0.20;
    }

    if (sum == 0) {
        console.log('Invalid order!')
    } else {
        if (typeOrder == 'special') {
            taxes = taxes * 0.90;
        }

        console.log(sum)
        console.log(taxes)
    }


}

solve([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
])

// solve([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ])
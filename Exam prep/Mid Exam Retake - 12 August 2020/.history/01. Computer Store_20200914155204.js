function solve(input) {

    let sum = 0;
    let typeOrder = '';

    for (const line of input) {
        let num = +line;
        if (num < 0) {
            console.log('Invalid price!')
        } else if (num == 0) {
            console.log('Invalid order!')
        }

        if (line === 'special' || line === 'regular') {
            typeOrder += line;
            break;
        }
        sum += num;
    }

    console.log(sum)

}

// solve([
//     '1050', '200',
//     '450', '2',
//     '18.50', '16.86',
//     'special'
// ])

solve([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
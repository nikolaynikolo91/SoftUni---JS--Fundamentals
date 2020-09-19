function solve(input) {

    let sum = 0;
    let taxes = 0
    let typeOrder = '';

    for (const line of input) {
        let num = +line;
        if (num < 0) {
            console.log('Invalid price!')
            continue;
        }

        if (line === 'special' || line === 'regular') {
            typeOrder += line;
            break;
        }
        sum += num;

        let tax = num * 0.20;
        taxes += tax;

    }

    if (sum == 0) {
        console.log('Invalid order!')
    } else {
        let total = sum + taxes;

        if (typeOrder == 'special') {
            total *= 0.90;
        }

        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sum.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log('-----------')
        console.log(`Total price: ${total.toFixed(2)}$`)
    }
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
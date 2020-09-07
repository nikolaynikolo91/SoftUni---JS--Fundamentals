function solve(arr) {
    let power = {
        'J': 11,
        'K': 12,
        'Q': 13,
        'A': 14
    };

    for (let i = 2; i < 11; i++) {
        power[`${i}`] = Number(i)
    }

    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let arr1 =[];
    let sum = 0;

    for (let card of arr) {


        if (card.length == 2) {
            let [el, type] = card.split('');
            let currentSum = Number(power[el]) * Number(types[type]);

          //  sum += currentSum;
          arr1.push(currentSum)

        } else {
           // let [el, elOrType, type] = card.split('');
        }

        // console.log(powers)
    }

    console.log(arr1)
}

//solve(['2C', '4H', '9H', 'AS', 'QS', 'JD'])
solve (['JD', '2C', '4H', '9H', 'AS', 'QS'])
//solve (['JD'])
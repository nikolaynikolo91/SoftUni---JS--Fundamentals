function solve(arr) {
    let power = {
        'J': 11,
        'Q': 12,
        'K': 13,
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

    let sum = 0;

    for (let card of arr) {
        let powerCard;
        let typeCard;

        if (card.length == 2) {
            let [el, type] = card.split('');
            // let currentSum = Number(power[el]) * Number(types[type]);
            //  sum += currentSum;
            powerCard = el;
            typeCard = type;
        } else {
            let [el, el2, type] = card.split('');
            let elSum = el.concat(el2)
            powerCard = elSum;
            typeCard = type;
        }
        sum += Number(power[powerCard]) * Number(types[typeCard]);

        console.log(sum)
    }
}

//solve(['2C', '4H', '9H', 'AS', 'QS', 'JD'])
//solve(['JD', '2C', '4H', '9H', 'AS', 'QS'])
solve(['1C', '10C'])
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

    let sum = 0;

    for (let card of object) {
      let [...powers, type] = card.split('');

      console.log(powers)
    }
}

solve(['2C', '4H', ' 9H', ' AS', 'QS', 'JD'])
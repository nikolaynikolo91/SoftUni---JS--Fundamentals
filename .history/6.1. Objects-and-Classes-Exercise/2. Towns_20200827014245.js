function solve(table) {

    for (let row of table) {
        const tokens = row.split(' | ');

        const obj = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2)
        };

        console.log(obj)
    }
}

solve(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ])

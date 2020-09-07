function solve(table) {
    let arrObj = [];

    for (let row of table) {
        const tokens = row.split(' | ');

        const obj = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2)
        };

        arrObj.push(obj)
    }


    for (const obj of arrObj) {
        console.log(obj)
    }
}

solve(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ])
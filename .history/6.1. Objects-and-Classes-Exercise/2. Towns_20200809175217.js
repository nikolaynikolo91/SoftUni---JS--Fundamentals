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
function solve(input) {
  let pattern =   /\b[A - Z][a - z] + [][A - Z][a - z] +\b/g;
let validNames = [];
let validName = null;

while((validName = pattern.exec(input)) !== null ) {
    validNames.push(validName[0]);

}

console.log(validNames)

}
solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov']
)
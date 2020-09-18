function solve(input) {

    let pattern = /([#\|])(?<name>[\ A-Za-z]+)\1(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2})\1(?<calories>\d+)\1/g;

    let result = pattern.exec(input[0]);
    let name = result['name'];
    let day = result['day'];
    let month = result['month'];
    let year = result['year'];
    let cal = result['calories'];

    console.log(name)

}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
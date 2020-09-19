function solve(input) {
    let totalCal = 0;
    let pattern = /([#\|])(?<name>[\ A-Za-z]+)\1(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2})\1(?<calories>\d+)\1/g;

    let output = [];
    let matched = input[0].match(pattern);
    //  let result = pattern.exec(input[0]);
    if (matched !== null) {
        for (const item of matched) {
            let secondPattern = /([#\|])(?<name>[\ A-Za-z]+)\1(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2})\1(?<calories>\d+)\1/g;
            let result = secondPattern.exec(item)
            output.push({
                'name': result.groups['name'],
                // 'day': result.groups['day'],
                // 'month': result.groups['month'],
                // 'year': result.groups['year'],
                'date': `${result.groups['day']}/${result.groups['month']}/${result.groups['year']}`,
                'cal': result.groups['calories']
            })
            totalCal += +result.groups['calories'];
        }


        console.log(`You have food to last you for: ${Math.floor(totalCal/2000)} days!`)
        for (const el of output) {
            console.log(`Item: ${el.name}, Best before: ${el.date}, Nutrition: ${el.cal}`)
        }
    } else {
        console.log(`You have food to last you for: 0 days!`)
    }

}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
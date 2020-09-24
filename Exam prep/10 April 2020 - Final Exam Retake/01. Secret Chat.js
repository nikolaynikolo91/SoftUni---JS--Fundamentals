function solve(input) {

    let str = input.shift();

    while (input[0] !== 'Reveal') {
        let line = input.shift();
        let [cmd, ...rest] = line.split(':|:');

        switch (cmd) {
            case 'ChangeAll':
                let oldStr = rest[0];
                let newStr = rest[1];

                while (str.includes(oldStr)) {
                    str = str.replace(oldStr, newStr)
                }
                break;
            case 'Reverse':
                let searchValue = rest[0];

                if (str.includes(searchValue)) {
                    str = str.replace(searchValue, '');
                    str += searchValue.split('').reverse().join('');
                } else {
                    console.log('error')
                    continue;
                }
                break;
            case 'InsertSpace':
                let arr = str.split('');
                arr.splice(+rest[0], 0, ' ');
                str = arr.join('');
                break;
            default:
                break;
        }
        console.log(str)
    }
    console.log(`You have a new text message: ${str}`)
}


// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ])

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])
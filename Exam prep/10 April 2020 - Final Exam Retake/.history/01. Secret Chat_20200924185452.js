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
                //  console.log(str)
                break;
            case 'Reverse':
                let searchValue = rest[0];

                if (str.includes(searchValue)) {
                    str = str.replace(searchValue, '');
                    str += searchValue.split('').reverse().join('');
                } else {
                    console.log('error')
                }

                //  console.log(str)
                break;
            case 'InsertSpace':
                str = str.splice(rest[0], 0, ' ').join('');
                console.log(str)
                break;

            default:
                break;
        }
        //    console.log(cmd)
    }
}


solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])

// solve([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
// ])
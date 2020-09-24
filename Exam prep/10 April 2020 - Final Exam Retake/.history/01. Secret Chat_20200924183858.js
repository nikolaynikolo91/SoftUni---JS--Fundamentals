function solve(input) {

    let str = input.shift();

    while (input[0] !== 'Reveal') {
        let line = input.shift();
        let [cmd, ...rest] = line.split(':|:');

        switch (cmd) {
            case 'ChangeAll':
                while (str.includes(rest[0])) {
                    str = str.replace(rest[0], rest[1])
                }
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
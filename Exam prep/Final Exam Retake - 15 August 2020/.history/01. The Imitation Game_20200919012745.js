function solve(input) {
    let myStr = input.slice(0, 1)[0];

    for (const line of input.slice(1)) {
        let [cmd, index, value] = line.split('|');
        if (cmd == 'Decode') {
            console.log(`The decrypted message is: ${myStr}`)
            break;
        } else {
            switch (cmd) {
                case 'ChangeAll':
                    changeAll(index, value)
                    break;
                case 'Insert':
                    insert(index, value)
                    break;
                case 'Move':
                    move(index)
                    break;

                default:
                    break;
            }
        }

    }

    function changeAll(subStr, replacement) {
        if (myStr.includes(subStr)) {
            //   let pattern = RegExp(subStr, 'g');
            let exp = String.fromCharCode(92);
            myStr = myStr.replace(`/${exp}${subStr}/g`, replacement)
        }

        // while (myStr.includes(subStr)) {
        //     myStr = myStr.replace(pattern, replacement);
        // }
    }

    function insert(index, value) {
        let validation = Number(index) >= 0 && Number(index) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr.splice(+index, 0, value)
            myStr = newStr.join('')
        }
    }

    function move(indexEnd) {
        let validation = Number(indexEnd) >= 0 && Number(indexEnd) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr = [...newStr.slice(+indexEnd), ...newStr.slice(0, +indexEnd)]
            myStr = newStr.join('');
        }
    }
}

solve(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

// solve(
//     [
//         'owyouh',
//         'Move|',
//         'Move|3',
//         'Insert|3|are',
//         'Insert|9|?',
//         'Decode'
//     ]

// )
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
                    //  myStr = changeAll(index, value)
                    let regex = RegExp(subStr, 'g');
                    let newStr = myStr.replace(regex, replacement)
                    myStr = newStr
                    break;
                case 'Insert':
                    //    myStr = insert(index, value)
                    let validation = Number(index) >= 0 && Number(index) <= myStr.length;
                    if (validation) {
                        let newStr = myStr.split('')
                        newStr.splice(index, 0, value)
                        myStr = newStr.join('')
                    }
                    break;
                case 'Move':
                  //  myStr = move(index)
                    let validation = Number(indexEnd) >= 0 && Number(indexEnd) <= myStr.length;
                    if (validation) {
                        let newStr = myStr.split('')
                        newStr = [...newStr.slice(indexEnd), ...newStr.slice(0, indexEnd)]
                        myStr = newStr.join('');
                    }
                    break;

                default:
                    break;
            }
        }

    }

    function changeAll(subStr, replacement) {
        let regex = RegExp(subStr, 'g');
        let newStr = myStr.replace(regex, replacement)
        return newStr
    }

    function insert(index, value) {
        let validation = Number(index) >= 0 && Number(index) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr.splice(index, 0, value)
            return newStr.join('')
        }
    }

    function move(indexEnd) {
        let validation = Number(indexEnd) >= 0 && Number(indexEnd) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr = [...newStr.slice(indexEnd), ...newStr.slice(0, indexEnd)]
            return newStr.join('');
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
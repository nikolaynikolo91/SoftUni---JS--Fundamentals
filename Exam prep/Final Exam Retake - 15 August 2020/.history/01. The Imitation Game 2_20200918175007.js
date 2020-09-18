function solve(input) {
    let myStr = input.slice(0, 1)[0];

    for (const line of input.slice(1)) {
        let [cmd, index, value] = line.split('|');
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
            case 'Decode':
                console.log(`The decrypted message is: ${myStr}`)
                break;
            default:
                break;
        }
    }

    function changeAll(subStr, replacement) {
        let regex = RegExp(subStr, 'g');
     
        if (myStr.includes(subStr)) {
            myStr = myStr.replace(regex, replacement)
        }

        //    console.log(typeof(myStr))
    }

    function insert(index, value) {
        let validation = Number(index) >= 0 && Number(index) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr.splice(index, 0, value)
            myStr = newStr.join("");

        }

        //   console.log(typeof(myStr))
    }

    function move(indexEnd) {
        if (Number(indexEnd) >= 0 && Number(indexEnd) <= myStr.length) {
            let newStr = myStr.split('')
            newStr = [...newStr.slice(indexEnd), ...newStr.slice(0, indexEnd)]
            //  myStr = myStr.substring(+indexEnd) + myStr.substr(0, +indexEnd)
            myStr = newStr.join('');

        }
        // console.log(newStr)
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
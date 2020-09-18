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


            default:
                break;
        }


    }

    console.log(`The decrypted message is: ${myStr}`)

    function changeAll(subStr, replacement) {
        let regex = RegExp(subStr, 'g');
        myStr = myStr.replace(regex, replacement)
        console.log(typeof(myStr))
    }

    function insert(index, value) {
        let newStr = myStr.split('')
        newStr.splice(index, 0, value)

        myStr = newStr.join("");
        console.log(typeof(myStr))
    }

    function move(indexEnd) {
        // let newStr = ''
        myStr = myStr.substring(+indexEnd) + myStr.substr(0, +indexEnd)
        //myStr = newStr;
        console.log(typeof(myStr))
    }
}

// solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])
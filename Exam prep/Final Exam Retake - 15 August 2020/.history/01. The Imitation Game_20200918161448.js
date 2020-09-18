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

    function changeAll(subStr, replacement) {
        let regex = RegExp(subStr, 'g');
        myStr = myStr.replace(regex, replacement)
    }

    function insert(index, value) {
        let newStr = myStr.split('')
        newStr.splice(index, 0, value)
        myStr = newStr.join("");
    }

    function move(indexEnd) {
        // let newStr = myStr.slice(0, indexEnd)
        let rightSide = ''
        rightSide = myStr.substr(0, +indexEnd) + myStr.substring(+indexEnd)
        //    console.log(newStr)
        console.log(rightSide)
    }
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
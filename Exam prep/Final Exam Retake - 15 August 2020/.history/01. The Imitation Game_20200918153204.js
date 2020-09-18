function solve(input) {
    let myStr = input.slice(0, 1)[0];

    for (const line of input.slice(1)) {
        let [cmd, index, value] = line.split('|');
        switch (cmd) {
            case 'ChangeAll':
                changeAll(index, value)
                break;

            default:
                break;
        }

    }

    function changeAll(subStr, replacement) {

        // console.log(subStr)
        // console.log(replacement)
        let regex = RegExp(subStr, 'g');
        myStr = myStr.replace(regex, replacement)

        console.log(myStr)
    }
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
function solve(input) {

    let str = input.shift();

    //  console.log(str)

    for (let i = 0; i < input.length; i++) {
        let [cmd, index1, index2] = input[i].split(':')
        if (cmd == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${str}`)
            break
        } else {
            switch (cmd) {
                case 'Add Stop':
                    if (isValid(+index1)) {
                        let arr = str.split('');
                        arr.splice(+index1, 0, index2);
                        str = arr.join('');
                    }
                    console.log(str)
                    break;
                case 'Remove Stop':
                    if (isValid(+index1) && isValid(+index2) && +index1 <= +index2) {
                        let start = +index1;
                        let end = +index2;
                        str = str.split('');
                        str = [...str.slice(0, start), ...str.slice(end + 1)]
                        str = str.join('');
                        console.log(str)
                    }
                    break;
                case 'Switch':
                    // while (str.includes(index1)) {
                    //     str = str.replace(index1, index2)
                    // }
                    // if (index1 !== index2) {
                    //     // str = str.split(index1);
                    //     // str = str.join(index2);
                    //     let rgx = new RegExp(index1, 'g');
                    //     str = str.replace(rgx, index2);
                    // }
                    let offset = 0;
                    while (str.indexOf(index1, offset) >= 0) {
                        str = str.replace(index1, (index1, offset) => index2);
                        offset = str.indexOf(index1, offset) + index2.length;
                    }
                    console.log(str)
                    break;
                default:
                    console.log(str)
                    break;
            }
        }
    }


    function isValid(num) {
        let length = str.length;
        if (num >= 0 && num < length) {
            return true
        } else {
            return false
        }
    }
}


// solve([
//     'Hawai::Cyprys-Greece',
//     'Add Stop:7:Rome',
//     'Remove Stop:11:16',
//     'Switch:Hawai:Bulgaria',
//     'Travel'
// ])
solve([
    'Hawai::Cyprys-Greece-Hawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])
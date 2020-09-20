function solve(input) {

    let str = input.shift();

    //  console.log(str)

    for (let i = 0; i < input.length; i++) {
        let [cmd, index1, index2] = input[i].split(':')
        if (cmd == 'Travel') {
            break
        } else {
            switch (cmd) {
                case 'Add Stop':
                    if (isValid(+index1)) {
                        str = str.split('')
                            .splice(+index1, 0, index2)
                            .join('');
                    }
                    console.log(str)
                    break;
                case 'Remove Stop':
                    if (isValid(+index1) && isValid(+index2) && +index1 <= +index2) {
                        str = str.slice(index2 + 1)
                        console.log(str)
                    }
                    break;
                case 'Switch':

                    break;

                default:
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

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])
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
                    if (index1 >= 0 && index1 <= str.length) { // str.length
                        let arr = str.split('');
                        arr.splice(+index1, 0, index2);
                        str = arr.join('');
                    }

                    break;
            
                case 'Remove Stop':
                    if ((isValid(index1)) && isValid(index2) && index1 <= index2) {
                        let start = +index1;
                        let end = +index2;
                        str = str.split('');
                        str = [...str.slice(0, start), ...str.slice(end + 1)]
                        //  allLocations.splice(startIndex, endIndex - startIndex + 1);
                        str = str.join('');

                    }
                    break;
                case 'Switch':
                    // while (str.includes(index1)) {
                    //     str = str.replace(index1, index2)
                    // // }
                    // if (index1 !== index2) {
                    //     //     // str = str.split(index1);
                    //     //     // str = str.join(index2);
                       let rgx = new RegExp(index1, 'g');
                     str = str.replace(rgx, index2);
                    // }

                    // if (oldString !== newString) {
                    //     while (allLocations.includes(oldString)) {
                    //         allLocations = allLocations.replace(oldString, newString);
                    //     }
                    //}
                    // let offset = 0;
                    // while (str.indexOf(index1, offset) >= 0) {
                    //     str = str.replace(index1, (index1, offset) => index2);
                    //     offset = str.indexOf(index1, offset) + index2.length;

                    // }
                    break;
                default:

                    break;
            }
            console.log(str) // console.log
        }
    }


    function isValid(num) {
        let length = str.length;
       // index1 >= 0 && index1 < str.length
        if (num >= 0 && num < length) { /// length =
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
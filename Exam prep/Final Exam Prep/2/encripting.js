function solve(input) {
    //let test1 = input[0].split('');
    //let newString = ''
    //for (let el of test1) {
    //let code = el.charCodeAt(0);
    //let newCode = code + input
    //console.log(code)
    for (let el of input) {

        let test1 = el.split('');
        test2 = test1.reduce((accumulator, currentValue, inx, arr) => {

            let code = currentValue.charCodeAt(0);
            let newCode = code + 12;

            if (code === 32) {
                accumulator = accumulator + ' ';
            } else if (code === 39) {
                accumulator = accumulator.concat("'");
            } else if (code >= 97 && code <= 122) {
                newCode = code + 12;
                if (newCode > 122) {
                    newCode = newCode - 26;
                }
                accumulator = accumulator.concat(String.fromCharCode(newCode));

            } else if (code >= 65 && code <= 90) {
                newCode = code + 12;
                if (newCode > 90) {
                    newCode = newCode - 26;
                }
                accumulator = accumulator.concat(String.fromCharCode(newCode));
            }

            return accumulator
        }, '')

        console.log(test2)
    }

    //}

    //input[0].split('').reduce()


    //console.log(test2)
}

solve([
    //'Michael Jackson:ANOTHER PART OF ME',
    //'Adele:ONE AND ONLY',
   // "Guns n'roses"

    "NOVEMBER RAIN",
    //'Christina Aguilera: HuRt',
    //'end'
]
)

 // Fijqj@TSJ FSI TSQD
//  Sgze zdaeqe@ZAbQYNQD DMUZ
//Sgze z'daeqe@ZAHQYNQD DMUZ
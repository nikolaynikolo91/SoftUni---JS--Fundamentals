function solve(password) {

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log('Password must be between 6 and 10 characters')
    }

    if ((isSymbol(password))) {
        console.log('Password must consist only of letters and digits')
    }

    if (numOfDigit(password) < 2) {
        console.log('Password must have at least 2 digits')
    }


    function numOfDigit(pass) {
        let numDigit = 0;

        for (const char of pass) {
            if (Number(char)) {
                numDigit++;
            }
        }
        return numDigit
    }

    function isSymbol(pass) {
        let findSymbol = false;

        for (const x of pass) {
            if ((Number(x))) {
                findSymbol = true;
            }
        }

        return findSymbol;
    }

 //   console.log(typeof(Number('$')))
}

solve ('logIn')
//solve('Pa$s$s')
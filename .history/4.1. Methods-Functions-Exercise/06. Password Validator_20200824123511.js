function solve(password) {

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log('Password must be between 6 and 10 characters')
    }

    if (numOfDigit(password) < 2) {
        console.log('Password must have at least 2 digits')
    }

    if (isSymbol(password)) {
        console.log('Password must consist only of letters and digits')
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
            if (Number(x) == NaN) {
                findSymbol = true;
            }
        }

        return findSymbol;
    }

    // console.log(Number('$'))
}


solve('Pa$s$s')
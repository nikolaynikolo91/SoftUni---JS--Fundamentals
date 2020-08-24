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

    function isSymbol(x) {
        if (Number(x) == NaN) {
            return true
        } else {
            return false
        }
    }

    console.log(Number('$'))
}


solve('MyPass123')
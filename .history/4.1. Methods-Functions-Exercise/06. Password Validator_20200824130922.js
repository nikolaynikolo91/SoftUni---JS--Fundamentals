function solve(password) {

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log('Password must be between 6 and 10 characters')
    }

    if ((issSymbol(password))) {
        console.log('Password must consist only of letters and digits')
    }

    if (numOfDigit(password) < 2) {
        console.log('Password must have at least 2 digits')
    }


    function numOfDigit(pass) {
        let numDigit = 0;

        for (const char of pass) {

            let charAsci = char.charCodeAt();

            if (charAsci >= 48 && charAsci <= 57) {
                numDigit++;
            }
        }
        return numDigit
    }

    function issSymbol(pass) {
        let findSymbol = false;

        for (const x of pass) {
            let charAsci = x.charCodeAt();

            let validationSpecialChar = !((charAsci >= 48 && charAsci <= 57) ||
                (charAsci >= 65 && charAsci <= 90) || (charAsci >= 97 && charAsci <= 122))

            if (validationSpecialChar) {
                findSymbol = true;
            }
        }


        return findSymbol;
    }


}

//solve ('logIn')

solve('Pa$s$s')
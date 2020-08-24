function solve(password) {

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log('Password must be between 6 and 10 characters')
    }

    let digit = numOfDigit(password)
    console.log(digit)

    function numOfDigit(pass) {
        let numDigit = 0;

        for (const char of pass) {
            if (Number(char)) {
                numDigit++;
            }
        }
        return numDigit
    }
}


solve('logIn')
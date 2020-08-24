function solve(password) {

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log('Password must be between 6 and 10 characters')
    }
}


solve('logIn')
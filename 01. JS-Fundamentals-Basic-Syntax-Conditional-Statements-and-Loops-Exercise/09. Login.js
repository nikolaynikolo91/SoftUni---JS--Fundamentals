function login(input) {
    let user = input.slice(0, 1);
    let arr = input.slice(1);

    let isLogIn = false;

    for (let i = 0; i < 3; i++) {
        let word = arr[i].split('').reverse().join('');

        if (word == user) {
            console.log(`User ${user} logged in.`)
            isLogIn = true;
            break;
        } else {
            console.log('Incorrect password. Try again.')
        }
    }

    if (!isLogIn) {
        console.log(`User ${user} blocked!`)
    }
}


//login(['Acer', 'login', 'go', 'let me in', 'recA']);
//login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
function solve(input) {

    let user = input.slice(0, 1)[0];
    let inputSlice = input.slice(1);

    inputSlice.forEach(function (cmd) {
        const result = cmd.split(' ');
        const command = result.shift();

        switch (command) {
            case 'Case':
                user = onNewCase(result, user);
                break;
            case 'Reverse':
                onReverseCase(result[0], result[1], user);
                break;
            case 'Cut':
                if (!user.includes(result[0])) {
                    console.log(`The word ${user} doesn't contain ${result[0]}.`)
                } else {
                    user = onCutCase(result, user)
                }
                break;
            case 'Replace':
                user = onReplaceCase(result, user);
                break;
            case 'Check':
                if (!user.includes(result[0])) {
                    console.log(`Your username must contain ${result[0]}.`)
                } else {
                    console.log(`Valid`)
                }
                break;
            default:
                break;
        }
    });

    function onNewCase(result, user) {

        if (result[0] === 'lower') {
            user = user.toLowerCase();
        } else if (result[0] === 'upper') {
            user = user.toUpperCase();
            //user = user.toUpperCase()
        }

        console.log(user)
        return user;
    }
    function onReverseCase(startIndex, endIndex, user) {
        if (startIndex < 0 || startIndex > user.length - 1 || startIndex > endIndex || endIndex > user.length - 1) {
            return
        }

        const subString = user.substring(Number(startIndex), Number(endIndex)+1).split('').reverse().join("")
        console.log(subString)
    }
    function onCutCase(result, user) {
        let rgx = new RegExp(([result[0]]), '')
        user = user.replace(rgx, '')
        console.log(user)
        return user;
    }
    function onReplaceCase(result, user) {
        let rgx = new RegExp(result[0], 'g');
        if (rgx.test(user)) {
            user = user.replace(rgx, "*")
            console.log(user)
        }
        return user;
    }
}






//solve(['Pessho',
  //  'Case lower',
   // 'Cut ES',
  //  'Check S',
    //'Sign up',
//])

//console.log('-'.repeat(10))

solve(['ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up'
    ]
)


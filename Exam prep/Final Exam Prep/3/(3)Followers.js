function solve(input) {
    let arr = input.slice();
    let users = [];

    const comandDictionary = {
        ["new follower"]: onNewCommand,
        ["like"]: onLikeCommand,
        ["comment"]: onCommentCommand,
        ["blocked"]: onBlockedCommand,
        ["log out"]: onLogOutCommand,
    };

    arr.forEach(function (cmd) {
        const result = cmd.split(': ');
        const command = result.shift().toLowerCase();
        if (command === 'log out') {
            comandDictionary[command](users)
        } else {
            comandDictionary[command](result, users);
        }
    });

    function onNewCommand(result, users) {
        let nameInput = result[0];
        let user = {
            name: nameInput,
            likes: +0,
            comemments: +0,
            status: 'follower'
        }

        let isExist = false;
        for (let obj of users) {
            if (obj.name === nameInput) {
                isExist = true;
            }
        }

        if (!isExist) {
            users.push(user)
        }
    }

    function onLikeCommand(result, users) {

        let [nameInput, count] = result;

        let isExist = false;

        for (let obj of users) {
            if (obj.name === nameInput) {
                obj.likes += +count;
                isExist = true;
            }
        }

        if (!isExist) {
            let newUser = {
                name: nameInput,
                likes: Number(count),
                comemments: Number(0),
            }

            users.push(newUser)
        }



        //console.log(nameInput);
        // console.log(count)

    }

    function onCommentCommand(result, users) {
        let nameInput = result[0];
        let isExist = false;

        for (let obj of users) {
            if (obj.name === nameInput) {
                obj.comemments += 1;
                isExist = true;
            }
        }

        if (!isExist) {
            let newUser = {
                name: nameInput,
                likes: Number(0),
                comemments: Number(1),
            }
            users.push(newUser)
        }
    }

    function onBlockedCommand(result, users) {
        let nameInput = result[0];
        let isExist = false;
        let indexNumber = undefined;

        for (let obj of users) {
            if (obj.name === nameInput) {
                obj.block = 1;
                isExist = true;
                indexNumber = users.indexOf(obj)
            }
        }

        if (!isExist) {
            console.log(`${nameInput} doesn't exist.`)
        } else {
            users = users.splice(indexNumber)
        }
    }

    function onLogOutCommand(users) {
        console.log(`${users.length} followers`)

        let sortedArr = users.sort(function (a, b) {
            if (b.likes - a.likes < 0
            ) return -1;
            if (b.likes - a.likes > 0
            ) return 1;
            if (b.likes - a.likes == 0) 
               a.localeCompare(b)
             return 0


        });

        // let sortedArr = users.sort(function (a, b) {
        //    if (a.name.toLowerCase() < b.name.toLowerCase()
        //     ) return -1;
        //     if (a.name.toLowerCase() > b.name.toLowerCase()
        //     ) return 1;
        //     return 0;
        // });

        for (let obj of sortedArr) {
            console.log(`${obj.name}: ${obj.likes + obj.comemments}`)
        }
    }
}







solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]

)
function solve(input) {

    inputArr = input.slice();
    cmd = inputArr.shift().split('; ')
    let data = {};
    let totalTime = 0;

    while (cmd[0] !== 'start of concert') {

        switch (cmd[0]) {
            case 'Add':
                if (!data.hasOwnProperty(cmd[1])) {
                    let newMembers = cmd[2].split(', ')

                    data[cmd[1]] = {
                        members: newMembers,

                    };

                } else {
                    let newMembers = cmd[2].split(', ')
                    newMembers.forEach(el => {
                        if (!(data[cmd[1]].members.includes(el))) {
                            data[cmd[1]].members.push(el);
                        }
                    });
                }
                break;
            case 'Play':
                totalTime += +cmd[2]

                if (!(data.hasOwnProperty(cmd[1]) )) {
                    data[cmd[1]] = {
                        members: [],
                        time: cmd[2]
                    };

                } else {
                    if (!data[cmd[1]].time) {
                        data[cmd[1]].time = cmd[2];
                       // console.log(data)

                       
                    } else {

                        // data[cmd[1]][time] = cmd[2];
                         let min = Number(cmd[2]);

                        data[cmd[1]].time = Number(data[cmd[1]].time) + min;
                         
                    }
                    break;
                }
            default:
                break;
        }

        cmd = inputArr.shift().split('; ')
    }
    cmd = inputArr.shift().split('; ')
    let lastComand = cmd.shift();

    let arr = Object.entries(data);
    let comparator = ((a, b) =>
        b[1].time - a[1].time || a[0].localeCompare(b[0]));
    sortedArr = arr.sort(comparator);

    console.log(`Total time: ${totalTime}`)

    sortedArr.forEach(el => {
        console.log(`${el[0]} -> ${el[1].time}`)
    });

    if (data.hasOwnProperty(lastComand)) {
        console.log(lastComand)
        for (let member of data[lastComand].members) {
            console.log(`=> ${member}`)
        }


    }
}

solve([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]

)
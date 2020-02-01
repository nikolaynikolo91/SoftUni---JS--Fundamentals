function solve(input) {

    let str = input.shift();
    let cmd = input.shift().split(' ')

    while (cmd[0] !== 'End') {
        switch (cmd[0]) { 
            case 'Translate':
                let rgx = new RegExp(cmd[1], 'g');
                str = str.replace(rgx, cmd[2])
                console.log(str)
                break;
            case 'Includes':
                console.log(str.includes(cmd[1]) ? 'True' : 'False')
                break;
            case 'Start':
                console.log(str.startsWith(cmd[1]) ? 'True' : 'False')
                break;
            case 'Remove':
                let end = Number(cmd[1]) + Number(cmd[2]);
                str = str.substring(0, cmd[1]) + str.substring(end)
                console.log(str)
                break;
            case 'Lowercase':
                str = str.toLowerCase();
                console.log(str)
                break;
            case 'FindIndex':
                console.log(str.lastIndexOf(cmd[1]))
                break;
        }
        cmd = input.shift().split(' ')
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
])
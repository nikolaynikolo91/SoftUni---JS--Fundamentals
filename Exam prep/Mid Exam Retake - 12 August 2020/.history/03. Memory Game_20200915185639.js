function solve(input) {

    let arr = input.slice(0, 1)[0].split(' ');
    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {
        const element = commands[i];

        console.log(element)
    }
}

solve([
    '1 1 2 2 3 3 4 4 5 5 ',
    '1 0',
    '-1 0',
    '1 0 ',
    '1 0 ',
    '1 0 ',
    'end'
])
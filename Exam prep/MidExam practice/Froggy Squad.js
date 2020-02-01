function froggySquad(arr) {

    const comandDictionary = {
        ["join"]: onJoinCommand,
        ["first"]: onFirstCommand,
        ["last"]: onLastCommand,
        ["jump"]: onJumpCommand,
        ["print"]: onPrintCommand,
        ["dive"]: onDiveCommand,
    };
    const frogsNames = arr.shift().split(' ');

    arr.forEach(function (cmd) {
        const result = cmd.split(' ');
        const command = result.shift().toLowerCase();
        comandDictionary[command](result, frogsNames);

    });




function onJoinCommand(result, frogsNames) {
    result.forEach(el => {
        let isInclude = el.includes(frogsNames);
        if (!isInclude) {
            frogsNames.push(el);
        }

    });


}

function onFirstCommand(result, frogsNames) {
    let index = Number(result[0]);
    let output = [];
    if (index > frogsNames.length) {
        index = frogsNames.length;
    }
    for (let i = 0; i < index; i++) {
        output.push(frogsNames[i]);
    }
    console.log(output.join(' '));
}

function onLastCommand(result, frogsNames) {
    let index = Number(result[0]);
    let output = [];
    let reveredArr = frogsNames.reverse();


    if (index > frogsNames.length) {
        index = frogsNames.length;
    }
    for (let i = 0; i < index; i++) {
        output.push(reveredArr[i]);
    }
    console.log(output.reverse().join(' '));
    frogsNames.reverse();

}

function onJumpCommand(result, frogsNames) {

    let name = result[0];
    let index = Number(result[1]);
    if (typeof frogsNames[index] === 'string') {
        frogsNames.splice(index, 0, name);
    }



}

function onPrintCommand(result, frogsNames) {
    let print = result[0];

    if (print === 'Normal') {
        console.log(`Frogs: ${frogsNames.join(' ')}`);
    }
    else if (print === 'Reversed') {
        console.log(`Frogs: ${frogsNames.reverse().join(' ')}`);
    }
}

function onDiveCommand(result, frogsNames) {
    let index = Number(result[0]);
    frogsNames.splice(index, 1);
}
}




froggySquad(['A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'])


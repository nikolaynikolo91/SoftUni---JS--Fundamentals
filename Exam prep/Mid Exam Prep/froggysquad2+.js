function froggySquad(arr) {
    let output = '';
    let names = arr.shift().split(' ');
    
    for (let iterator of arr) {

        let command = iterator.split(' ');
        let firstWord = command.shift();
        let secondWord = command.shift();

        if (firstWord === 'Join') {
            names.push(secondWord);
        } else if (firstWord === 'Jump') {
            let num = command.shift();
            if (num >= 0 && num <= names.length) {
                names.splice(Number(num), 0, secondWord);
            }
        } else if (firstWord === 'Dive') {
            let num = Number(secondWord);
            if (num >= 0 && num < names.length) {
                names.splice(num, 1);
                
            }
        } else if (firstWord === 'First') {
            let count = Number(secondWord);
            console.log(names.slice(0, count).join(' '));

        } else if (firstWord === 'Last') {
            let count = Number(secondWord);
            console.log(names.slice(-count).join(' '));

        } else if (firstWord === 'Print') {
            if (secondWord === 'Reversed') {
                output = `Frogs: ${names.reverse().join(' ')}`;
            } else if (secondWord === 'Normal') {
                output = `Frogs: ${names.join(' ')}`;
            }
            console.log(output);
        }
    }
}


froggySquad(['A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'])
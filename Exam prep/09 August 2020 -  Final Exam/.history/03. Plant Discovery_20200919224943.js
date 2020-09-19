function solve(input) {
    let n = +input.shift();

    let myObj = {};

    for (let i = 0; i < n; i++) {
        let el = input.shift();
        let [name, rarity] = el.split('<->');
        if (!(myObj.hasOwnProperty(name))) {
            myObj[name] = {
                "rarity": +rarity
            }
        } else {
            myObj[name]['rarity'] = +rarity;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let [cmd, str] = input[i].split(': ');
        console.log(cmd)
        
    }

}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
])

// solve([
//     '2',
//     'Candelabra<->10',
//     'Oahu<->10',
//     'Rate: Oahu - 7',
//     'Rate: Candelabra - 6',
//     'Exhibition'
// ])
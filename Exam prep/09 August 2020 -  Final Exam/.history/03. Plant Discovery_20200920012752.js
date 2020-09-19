function solve(input) {
    let n = +input.shift();

    let myObj = {};

    for (let i = 0; i < n; i++) {
        let el = input.shift();
        let [name, rarity] = el.split('<->');
        makeObj(name, rarity)
    }

    for (let i = 0; i < input.length; i++) {
        let [cmd, str] = input[i].split(': ');
        if (cmd == 'Exhibition') {
            printResult(myObj)
            break;
        } else {
            let [name, rate] = str.split(' - ');
            if (myObj.hasOwnProperty(name)) {
                switch (cmd) {
                    case 'Rate':
                        myObj[name]['rates'].push(Number(rate))
                        break;
                    case 'Update':
                        myObj[name]['rarity'] = +rate;
                        break;
                    case 'Reset':
                        myObj[name]['rates'] = [];
                        break;
                    default:
                        console.log('error')
                        break;
                }
            } else {
                console.log('error')
            }
        }
    }

    function makeObj(name, rarity) {
        if (!(myObj.hasOwnProperty(name))) {
            myObj[name] = {
                "rarity": +rarity,
                'rates': [],
            }
        } else {
            myObj[name]['rarity'] = +rarity;
        }
    }

    function average(obj) {
        let arr = obj['rates'];
        if (arr.length > 0) {
            let sum = arr.reduce((a, b) => a + b);
            let avr = sum / arr.length
            return avr
        } else {
            return 0
        }
    }

    function printResult(obj) {
        console.log('Plants for the exhibition:');
        let arrKeys = Object.keys(obj);
        for (let key in myObj) {
            myObj[key]['avr'] = average(myObj[key])
        }

        let sorted = arrKeys
            .sort((a, b) => obj[b].rarity - obj[a].rarity || obj[b].avr - obj[a].avr)

        for (let key of sorted) {
            let {
                rarity,
                rates,
                avr
            } = myObj[key];

            console.log(`- ${key}; Rarity: ${rarity}; Rating: ${avr.toFixed(2)}`)
        }
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
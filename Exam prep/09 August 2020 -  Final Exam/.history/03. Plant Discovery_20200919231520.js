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
        // console.log(str)
        if (cmd == 'Exhibition') {
            break;
        } else {
            let [name, rate] = str.split(' - ');

            switch (cmd) {
                case 'Rate':
                    rateFunc(name, rate)
                    break;
                case 'Update':
                    makeObj(name, rate)
                    break;
                case 'Reset':
                    reset(name)
                    break;

                default:
                    break;
            }

        }


    }

    console.log('test')

    function makeObj(name, rarity) {
        if (!(myObj.hasOwnProperty(name))) {
            myObj[name] = {
                "rarity": +rarity,
                'rates': []
            }
        } else {
            myObj[name]['rarity'] = +rarity;
        }
    }

    function rateFunc(name, rate) {
        // let [name, rate] = str.split(' - ');
        myObj[name]['rates'].push(Number(rate).toFixed(2))
    }

    // function update(name, rarity) {
    //   //  let [name, rarity] = str.split(' - ');
    //     makeObj(name, rarity)
    // }

    function reset(name) {
        // let [name, rate] = str.split(' - ');
        myObj[name]['rates'] = [];
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
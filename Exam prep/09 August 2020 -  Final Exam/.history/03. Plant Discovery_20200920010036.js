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
            printResult(myObj)
            break;
        } else {
            let [name, rate] = str.split(' - ');

            switch (cmd) {
                case 'Rate':
                    myObj[name]['rates'].push(Number(rate))
                    break;
                case 'Update':
                    makeObj(name, rate)
                    break;
                case 'Reset':
                    //   reset(name)
                    if (myObj.hasOwnProperty(name)) {
                        myObj[name]['rates'] = [];
                    }
                    break;

                default:
                    break;
            }

        }

    }

    //    console.log('test')


    function makeObj(name, rarity) {
        if (!(myObj.hasOwnProperty(name))) {
            myObj[name] = {
                "rarity": +rarity,
                'rates': [],
                // 'average': average(myObj[name])
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
            return avr.toFixed(2)
        } else {
            return '0.00'
        }
    }

    function printResult(obj) {
        console.log('Plants for the exhibition:');
        let arrKeys = Object.keys(obj);

         for (let key in myObj) {
            myObj[key]['avr'] = average(myObj[key])
        }
        let output = {}
        let sorted = arrKeys
        .sort((a, b) => obj[a].rarity - obj[b].rarity)
        .sort((a,b) => obj[b].avr - obj[a].avr )

        for (let key of sorted) {
           output[key] = myObj[key];
        }
let secondSort = Object.keys(output).sort((a,b)=> output[a].avr - output[b].arv)

        for (let key in obj) {
            let {
                rarity,
                rates
            } = obj[key];

            let avr = average(obj[key])

            console.log(`- ${key}; Rarity: ${rarity}; Rating: ${avr}`)
        }
        //  console.log(obj)
        //   let [name, obj] = Object.entries(obj)


    }

    // function rateFunc(name, rate) {
    //     myObj[name]['rates'].push(Number(rate))
    // }

    // function reset(name) {
    //     myObj[name]['rates'] = [];
    // }



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
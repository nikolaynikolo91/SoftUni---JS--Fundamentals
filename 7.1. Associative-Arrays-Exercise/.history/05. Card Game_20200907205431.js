function solve(input) {

    let myObj = {};

    let power = {
        'J': 11,
        'K': 12,
        'Q': 13,
        'A': 14
    };

    for (let i = 2; i < 11; i++) {
        power[`${i}`] = Number(i)
    }

    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (const line of input) {
        let [key, inputCards] = line.split(': ')
        let cards = inputCards.split(', ')
        if (!myObj.hasOwnProperty(key)) {
            //  let set = new Set(cards);
            myObj[key] = cards;
        } else {
            let myCards = myObj[key];
            //let newSet = new Set([...myCards, ...cards])
            //  myObj[key] = newSet;
            let newCards = [...myCards, ...cards]
            console.log(newCards)
            

        }
    }

    console.log(myObj)
}


solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    //   'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    //  'Andrea: QH, QC, QS, QD',
    //  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    //  'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
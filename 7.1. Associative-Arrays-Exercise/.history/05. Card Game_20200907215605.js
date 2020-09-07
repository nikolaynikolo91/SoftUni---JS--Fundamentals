function cardSum(input) {

    let myObj = {};

    for (const line of input) {
        let [key, inputCards] = line.split(': ')
        let cards = inputCards.split(', ')
        if (!myObj.hasOwnProperty(key)) {
            let set = new Set(cards);
            myObj[key] = set;
        } else {
            let myCards = myObj[key];
            let newSet = new Set([...myCards, ...cards])
            myObj[key] = newSet;
        }
    }

    console.log(myObj)

    function cardSum(arr) {
        let power = {
            'J': 11,
            'Q': 12,
            'K': 13,
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

        let sum = 0;

        for (let card of arr) {
            let powerCard;
            let typeCard;

            if (card.length == 2) {
                let [el, type] = card.split('');
                powerCard = el;
                typeCard = type;
            } else {
                let [el, el2, type] = card.split('');
                let elSum = el.concat(el2)
                powerCard = elSum;
                typeCard = type;
            }
            sum += Number(power[powerCard]) * Number(types[typeCard]);
        }

        return sum;
    }

    for (const key in myObj) {
        //console.log(myObj[key])
      let sum = cardSum(Array.from.myObj[key])
      console.log(sum)
        //console.log(`${key}: ${sum}`)
    }

}


cardSum([
    'Peter: 2C, 4H, 9H, AS, QS',
    //   'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    //  'Andrea: QH, QC, QS, QD',
    //  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    //  'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
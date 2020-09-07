function solve(input) {

    let myObj = {};

    for (const line of input) {
        let [key, inputCards] = line.split(': ')
        //   console.log(key)
        let cards = inputCards.split(', ')
        //  console.log(cards)
        // .map((x) => x.toString());
        if (myObj.hasOwnProperty(key)) {
            let set = new Set(cards);
            myObj[key] = cards;
        } else {
            let myCards = myObj[key];
            let newSet = new Set(myCards, cards)
            myObj[key] = newSet;
        }
    }

    console.log(myObj)
}


solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
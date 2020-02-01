function solve(arr) {
    
    let deck = arr.shift().split(':');
    

    


    for (let iterator of arr) {
        let command = iterator.split(' ');
        let firstWord = command.shift();
        let cardName = command.shift();

        if (firstWord == 'Add') {
            if (deck.includes(`${cardName}`)) {
                let index = deck.indexOf(cardName);
                let removeItem = deck.splice(index, 1);
                deck.push(removeItem);
            }
            else if (!(deck.includes(`${cardName}`))) {
                console.log('Card not found.')
            }
        }
        else if (firstWord == 'Insert') {
            secondCard = command.shift();
            if (deck.includes(`${cardName}`)) {
                let index = deck.indexOf(cardName);
                let removeItem = deck.splice(index, 1);
                deck.splice(secondCard, 1, removeItem);
            }
            else {
                console.log('Error!')
            }
        }
        else if (firstWord == 'Remove') {

            if (deck.includes(`${cardName}`)){
                let index = deck.indexOf(cardName);
                deck.splice(index, 1);
            }
            else if (!(deck.includes(`${cardName}`))) {
                console.log('Card not found')
            }
        }


        else if (firstWord == 'Swap') {
            secondCard = command.shift();
            let index = deck.indexOf(cardName);
            let iSecondCard = deck.indexOf(secondCard)
            let removeItem = deck.splice(index, 1);
            deck.splice(secondCard, 0, removeItem);
            [deck[index], deck[iSecondCard]] = [deck[iSecondCard], deck[index]];
        }
        else if (firstWord == 'Shuffle deck ') {
            deck.reverse();
        }
        else if (firstWord == 'Ready') {
            console.log(deck.join(' '))

            break
        }
    }
}


solve(['Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
])
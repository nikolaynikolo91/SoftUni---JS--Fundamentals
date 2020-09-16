function solve(input) {

    let waitingPeople = Math.floor(Number(input[0]));
    let arrStates = input[1].split(' ').map(x => Number(x));
    let emptySlots = false;

    for (let i = 0; i < arrStates.length; i++) {
        let sum = arrStates[i] + 4;
        let element = 4;

        if (sum > 4) {
            waitingPeople += arrStates[i];
        }

        if (waitingPeople >= 4) {
            arrStates[i] = element;
            waitingPeople -= element;
        } else {
            arrStates[i] = waitingPeople;
            waitingPeople = 0;
            emptySlots = true;
        }
    }

    if (emptySlots) {
        console.log(`The lift has empty spots!`)
    }
    if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`)
    }

    console.log(arrStates.join(' '))
}

// solve(['15', '0 0 0 0'])
//solve(['10.1', '3 2 0 0 2'])
solve([
    "20",
    "0 2 0"
])
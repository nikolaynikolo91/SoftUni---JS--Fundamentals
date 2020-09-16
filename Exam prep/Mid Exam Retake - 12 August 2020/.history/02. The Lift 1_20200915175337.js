function solve(input) {

    let waitingPeople = Math.floor(Number(input[0]));
    let arrStates = input[1].split(' ').map(x => Number(x));
    let emptySlots = false;

    for (let i = 0; i < arrStates.length; i++) {
        let sum = arrStates[i] + 4;

        if (sum == 4 && waitingPeople > 4) {
            arrStates[i] = sum;
            waitingPeople -= 4;
        } else if (sum == 4 && waitingPeople < 4) {
            arrStates[i] = waitingPeople;
            waitingPeople = 0;
        } else if (sum > 4 && waitingPeople > 4) {
            arrStates[i] = 4;
            waitingPeople -= sum - 4
        } else if (waitingPeople == 0) {
            arrStates[i] = arrStates[i];
            emptySlots = true;
        } 
        // else {
        //     arrStates[i] = waitingPeople;
        //     waitingPeople = 0;
        //     emptySlots = true;
        // }
    }

    if (emptySlots) {
        console.log(`The lift has empty spots!`)
    }
    if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`)
    }

    console.log(arrStates.join(' '))
}

solve(['15', '0 0 0 0'])
//solve(['10.1', '3 2 0 0 2'])
// solve([
//     "20",
//     "0 2 0"
// ])
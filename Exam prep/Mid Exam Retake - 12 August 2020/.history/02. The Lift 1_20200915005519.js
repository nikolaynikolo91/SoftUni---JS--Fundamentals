function solve(input) {

    let waitingPeople = Number(input[0]);
    let arrStates = input[1].split(' ').map(x => Number(x));
    let emptySlots = false;

    for (let i = 0; i < arrStates.length; i++) {
        let sum = arrStates[i] + 4;

        if (sum = 4 && waitingPeople > 4) {
            arrStates[i] = 4;
            waitingPeople -= 4;
        } else if (sum > 4 && waitingPeople > 4) {
            arrStates[i] = 4;
            waitingPeople += sum - 4
        } else {
            arrStates[i] = waitingPeople;
            waitingPeople = 0;
            emptySlots = true;
        }
    }

    if (emptySlots) {
        console.log(`The lift has empty spaces!`)
    }
    if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`)
    }

    console.log(arrStates.join(' '))
}

solve(['15', '0 0 0 0'])
// solve([
//     "20",
//     "0 2 0"
// ])
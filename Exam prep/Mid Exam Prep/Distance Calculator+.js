function makeCalculation([stepsMade, lengthStep, needToTravel]) {
    needToTravel = needToTravel * 100;
    let sum = 0;

    for (let i = 1; i <= stepsMade; i++) {
        if (i % 5 == 0) {
            sum += Number(lengthStep * 0.70);
        }
        else {
            sum += Number(lengthStep);
        }
    }

    let total = (sum * 100) / Number(needToTravel);
    console.log(`You travelled ${total.toFixed(2)}% of the distance!`)
}

makeCalculation(['5000', '7.5', '500'])
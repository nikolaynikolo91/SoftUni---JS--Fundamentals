function solve(arr) {

    let biscuitsaDay = arr.shift();
    let employees = arr.shift();
    let biscuitsOderFirm = arr.shift();

    let producePerDay = Number(biscuitsaDay * employees);
    let producePerMonth = 0;

    for (let i = 0; i < 30; i++) {
        if (i % 3 == 0) {
            producePerMonth += Math.floor(0.75 * producePerDay);
        }
        else {
            producePerMonth += producePerDay;
        }

    }
    
    let difFarm = Math.abs(producePerMonth - Number(biscuitsOderFirm));
    let percent = difFarm / biscuitsOderFirm * 100;

    

    if (producePerMonth > Number(biscuitsOderFirm)) {
        console.log(`You have produced ${producePerMonth} biscuits for the past month.`)
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`)
    }
    else {
        console.log(`You have produced ${producePerMonth} biscuits for the past month.`)
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`)
    }
    
}

solve(['78', '8', '16000'])
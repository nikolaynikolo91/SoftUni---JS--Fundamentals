function solve(input) {

    let parking = [];


    input.forEach(command => {
        let [direction, carNumber] = command.split(', ');

        if (direction === 'IN' && !parking.includes(carNumber)) {
            parking.push(carNumber)
        } else if (direction === 'OUT' && parking.includes(carNumber)) {

            parking = parking.filter((cN) => cN !== carNumber);
        }
    });
   if(parking.length > 0) {
    console.log(parking.sort((a, b) => a.localeCompare(b)).join('\n'))
   }
   else {
       console.log('Parking Lot is Empty')
   }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
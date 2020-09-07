function solve(input) {

    let parking = new Map();

    for (const string of input) {
        tokens = string.split(', ');
        if (tokens[0] === 'IN') {
            parking.set(tokens[1])
           
        } else if (tokens[0] === 'OUT') {
            parking.delete(tokens[1])
        }
    }
 
    let entries = Array.from(parking.entries())
    .sort();
    if (entries.length > 0) {

        for (const key in entries) {
           console.log(`${entries[key].join(' ')}`)
        }
    } else {
        console.log(`Parking Lot is Empty`)
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
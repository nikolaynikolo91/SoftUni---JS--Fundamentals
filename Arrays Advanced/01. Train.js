function train(arr) {

    let wagons = arr[0].split(' ').map(Number);
    let maxCapaciti = +(arr[1]);
    let comands = arr.slice(2);

    for (let cmd of comands) {
        
        let tokens = cmd.split(' ')

        if (tokens.length === 2){
            wagons.push(+(tokens[1]));

        }
        else{

            let pasengerToFit = +(tokens[0]);

            for (let index in wagons) {
                let aveilableCapacity = maxCapaciti - wagons[index];

                if (aveilableCapacity >= pasengerToFit) { 
                    wagons[index] += pasengerToFit;
                    break;
                }
            }
        }

    }

    console.log(wagons.join(' '))
}



train (
    ['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']
);
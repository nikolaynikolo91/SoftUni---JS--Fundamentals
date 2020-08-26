function train(arr) {

    let wagons = arr[0].split(' ').map(Number);
    let maxCapacity = +(arr[1]);
    let command = arr.slice(2);

    for (let cmd of command) {

        let tokens = cmd.split(' ')

        if (tokens.length === 2) {
            wagons.push(+(tokens[1]));

        } else {

            let passengerToFit = +(tokens[0]);

            for (let index in wagons) {
                let availableCapacity = maxCapacity - wagons[index];

                if (availableCapacity >= passengerToFit) {
                    wagons[index] += passengerToFit;
                    break;
                }
            }
        }

    }

    console.log(wagons.join(' '))
}



train(
    ['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75'
    ]
);
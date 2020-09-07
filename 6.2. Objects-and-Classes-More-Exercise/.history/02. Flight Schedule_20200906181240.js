function solve(input) {

    class Flight {
        status = '';

        constructor(id, name) {
            this.id = id;
            this.name = name;
        }

        status(status) {
            return this.status = status;
        }

        get getStatus() {
            return this.status;
        }

    }

    let specificSector = input[0];
    let newChangedStatuses = input[1];
    let flightStatus = input[2];


    let arr = [];

    for (let i = 0; i < specificSector.length; i++) {
        let [id, ...name] = input[0][i].split(' ');

        //console.log(id)
        // console.log(name.join(' '))

        arr.push(new Flight(id, name.join(' ')))

    }

    console.log(arr.length)
    // for (let j = 0; j < arr.length; j++) {
    //     const element = arr[j];
    //     console.log(element)

    // }
}


solve([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
])
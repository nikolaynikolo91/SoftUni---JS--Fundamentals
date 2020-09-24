function solve(input) {

    let myCars = {};

    let n = input.shift();

    while (n > 0) {
        let [name, milage, fuel] = input.shift().split('|');
        makeCar(name, milage, fuel)
        n--;
    }

    while (input[0] !== 'Stop') {
        let [cmd, ...rest] = input.shift().slit(' : ');
        //console.log(line)

        switch (cmd) {
            case 'Drive':
                drive(rest[0], rest[1], rest[2])
                break;

            default:
                break;
        }
    }

    function makeCar(name, milage, fuel) {
        if (!(myCars.hasOwnProperty(name))) {
            myCars[name] = {
                milage,
                fuel
            }
        }
    }

    function drive(name, distance, fuel) {
        myCars[name]

        if (myCars[name]['fuel'] >= fuel) {

        } else {
            console.log(`Not enough fuel to make that ride`)
        }
    }

    console.log(myCars)
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])

//   solve ([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ]
//   )
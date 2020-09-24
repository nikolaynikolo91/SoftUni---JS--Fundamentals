function solve(input) {

    let myCars = {};

    let n = input.shift();

    while (n > 0) {
        let [name, mileage, fuel] = input.shift().split('|');
        makeCar(name, mileage, fuel)
        n--;
    }

    while (input[0] !== 'Stop') {
        let [cmd, ...rest] = input.shift().split(' : ');
        //console.log(line)

        switch (cmd) {
            case 'Drive':
                drive(rest[0], rest[1], rest[2])
                break;
            // case 'Drive':
            //     drive(rest[0], rest[1], rest[2])
            //     break;

            default:
                break;
        }
    }

    function makeCar(name, mileage, fuel) {
        if (!(myCars.hasOwnProperty(name))) {
            myCars[name] = {
                mileage,
                fuel
            }
        }
    }

    function drive(name, distance, fuel) {
        if (myCars[name]['fuel'] >= fuel) {
            myCars[name]['mileage'] += +distance;
            myCars[name]['fuel'] -= +fuel;
            console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
        } else {
            console.log(`Not enough fuel to make that ride`)
        }

        if (myCars[name]['mileage'] >= 100000) {
            delete myCars[name];
            console.log(`Time to sell the ${name}!`)
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
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

        switch (cmd) {
            case 'Drive':
                drive(rest[0], rest[1], rest[2])
                break;
            case 'Refuel':
                refuelCar(rest[0], rest[1])
                break;
            case 'Revert':
                revertCAr(rest[0], rest[1])
                break;

            default:
                break;
        }
    }

    printAll();

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

    function refuelCar(name, fuel) {
        let carFuelNeed = 75 - myCars[name]['fuel'];

        if (fuel > carFuelNeed) {
            console.log(`${name} refueled with ${carFuelNeed} liters`)
            myCars[name]['fuel'] = 75;
        } else {
            myCars[name]['fuel'] += +fuel;
            console.log(`${name} refueled with ${fuel} liters`)
        }
    }

    function revertCAr(name, kms) {
        let newMileage = myCars[name]['mileage'] - kms;

        if (newMileage < 10000) {
            myCars[name]['mileage'] = 10000;
        } else {
            myCars[name]['mileage'] -= kms;
            console.log(`${name} mileage decreased by ${kms} kilometers`)
        }
    }

    function printAll() {
        let sort = Object.keys(myCars).sort((a, b) =>
            (myCars[a]['mileage'] === myCars[b]['mileage']) ? a.localeCompare(b) :
            myCars[b]['mileage'] - )

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
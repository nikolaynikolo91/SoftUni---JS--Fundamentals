class Vehicle {

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(fuelLost) {
        this.fuel -= fuelLost;
    }
}

const opelParts = {
    engine: 100,
    power: 60,
    quality: 160
};

const myVehicle = new Vehicle('Opel', 'Vectra', opelParts, 190);

console.log(myVehicle);

myVehicle.drive(40);

console.log(myVehicle);
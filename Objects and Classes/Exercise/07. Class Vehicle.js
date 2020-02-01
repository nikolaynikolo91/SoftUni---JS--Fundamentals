class Vihicle {

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(fuellost) {
        this.fuel -=fuellost;
    }
}

const opelVectraParts = {
    engine: 100,
    power:60,
    quality:160
};

const myVehicle = new Vihicle('Opel', 'Vectra', opelVectraParts, 190);

console.log(myVehicle);

myVehicle.drive(40);

console.log(myVehicle);
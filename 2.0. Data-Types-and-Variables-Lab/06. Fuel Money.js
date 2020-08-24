function solve(distanceKm, passengers, pricePerLiter) {
    let perKm = ((distanceKm) / 100) * 7;
    perKm += (passengers * 0.100);
    let neededMoney = pricePerLiter * perKm;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

solve(90, 14, 2.88)
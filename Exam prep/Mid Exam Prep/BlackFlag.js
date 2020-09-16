function blackFlag (arr) {
    const days = arr[0];
    const dailyPlunder = arr[1];
    const expectedPlunder = arr[2];
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        if (i % 3 == 0) {
            totalPlunder += +dailyPlunder;
            totalPlunder += 0.50 * dailyPlunder;
        }
        else if (i % 5 == 0) {
            totalPlunder += +dailyPlunder;
            totalPlunder -= 0.30 * totalPlunder;
        }
        else {
            totalPlunder += +dailyPlunder;
        }


    }
    if (totalPlunder >= expectedPlunder) {

        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    }
    else {
        let percent = (totalPlunder * 100) / expectedPlunder;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }
}


blackFlag([5, 40, 100])


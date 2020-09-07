function solve(dataJson) {

    let arrData = [];

    for (let i = 0; i < dataJson.length; i++) {

        let objEl = JSON.parse(dataJson[i]);

        arrData.push(objEl)

    }


    //let sortedArr = arrData.sort((a, b) => a.temp - b.temp);

    for (const el of arrData) {
        ({
            temp: value,
            value: value
        } = el)

        console.log(`${temp.value} => ${value.value}`)
        //  console.log(`${el.temp} => ${el.value}`)

    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
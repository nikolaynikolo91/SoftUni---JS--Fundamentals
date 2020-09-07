function solve(dataJson) {

    let arrData = {};

    for (let i = 0; i < dataJson.length; i++) {
        const objEl = JSON.parse(dataJson[i]);
        //    console.log(objEl)
        Object.keys(objEl).forEach((key) => {
            arrData[key] = objEl[key]

        });


    }

    let sortedKey = Object.keys(arrData);
    sortedKey.sort((a, b) => a.localeCompare(b));



    for (const iterator of sortedKey) {
        console.log(`${iterator} => ${sortedKey[iterator]} `)
    }



    //   let ordered = Object.keys(arrData).forEach(key => { 
    //       console.log(arrData[key])
    //   })

    console.log(arrData.length)




    //let sortedArr = arrData.sort((a, b) => a.temp - b.temp);


    // const ordered = {};
    // Object.keys(unordered).sort().forEach(function (key) {
    //     ordered[key] = unordered[key];
    // });


    // let sortedArr = arrData.sort();

    // for (const el of arrData) {
    //     console.log(el)
    // }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
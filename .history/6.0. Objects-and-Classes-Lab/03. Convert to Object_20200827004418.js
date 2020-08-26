function solve(input) {

    let obj = JSON.parse(input);

    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    });


    //console.log(obj)
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')
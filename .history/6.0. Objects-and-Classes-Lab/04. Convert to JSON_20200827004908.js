function solve(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    }

    let jsonObj = JSON.stringify(obj);

    console.log(jsonObj)
}

solve('George',
    'Jones',
    'Brown'
)
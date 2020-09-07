function solve(input) {
    let obj = {};
    for (const line of input) {
        let [name, id] = line.split(' -> ');
        if (!obj.hasOwnProperty(name)) {
            obj[name] = [];
        }
        obj[name].push(id)
    }

    let sorted = Object.keys(obj)
        .sort((a, b) => a.localeCompare(b))

    for (let key in obj) {
        obj[key] = new Set(obj[key]);
    }

    for (const key of sorted) {
        //console.log(key)
        console.log(Array.from(obj[key]))
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    //  'Microsoft -> CC12345',
    //  'HP -> BB12345'
])
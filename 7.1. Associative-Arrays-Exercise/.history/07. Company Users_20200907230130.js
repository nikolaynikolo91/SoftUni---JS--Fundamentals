function solve(input) {
    let obj = {};
    for (const line of input) {
        let [name, id] = line.split(' -> ');
        if (!obj.hasOwnProperty(name)) {
            obj[name] = [];
        } 

        obj[name].push(id)
    }

    console.log(obj)
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
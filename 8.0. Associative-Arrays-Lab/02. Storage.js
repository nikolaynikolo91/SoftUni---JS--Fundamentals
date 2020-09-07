function solve (input){

    let storage = new Map();

    input.forEach(element => {
        let token = element.split(' ');

        if (storage.has(token[0])) {
            let oldQnt = storage.get(token[0]);
            storage.set(token[0], oldQnt + Number(token[1]))
        } else {
            storage.set(token[0], Number(token[1]));
        }

    });

    let entries = Array.from(storage.entries());

    entries.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`)
        
    });
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
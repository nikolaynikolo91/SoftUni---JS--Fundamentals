function solve(input) {

    let arr = input.slice(0, 1);
    let data = input.slice(1);

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element)

    }
}


solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])
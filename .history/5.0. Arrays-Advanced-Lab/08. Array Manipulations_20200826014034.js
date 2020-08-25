function solve(input) {

    let arr = input.slice(0, 1);
    arr = arr[0].split(' ').map((x)=> Number(x));

    let data = input.slice(1);

    console.log(arr)

    // let obj = {
    //     'Add': (a, b) => arr.push(a),
    //     'Remove': (a, b, ) => arr.filter((x) => x !== a),
    //     'RemoveAt': (a, b) => arr.splice(a, 1),
    //     'Insert': (a, b) => arr.splice(3, 0, a)
    // }

    // for (let i = 0; i < data.length; i++) {
    //     let [cmd, num1, num2] = data[i].split(' ');
    //     obj[cmd](num1, num2)

    // }



    // console.log(arr)
}


solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])
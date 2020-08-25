function solve(input) {

    let arr = input.slice(0, 1);
    arr = arr[0].split(' ')
        .map((x) => Number(x));

    let data = input.slice(1);

    let obj = {
        'Add': function (a) {
            arr.push(Number(a))
        },
        'Remove': function (a) {
            arr = arr.filter((x) => x !== +a)
        },
        'RemoveAt': function (a) {
            arr.splice(+a, 1)
        },
        'Insert': function (a, b) {
            arr.splice(+b, 0, +a)
        }
    }

    for (let i = 0; i < data.length; i++) {
        let [cmd, num1, num2] = data[i].split(' ');
        obj[cmd](num1, num2)
    }

    console.log(arr.join(' '))
}


solve(['4 19 2 53 6 43', //4 53 6 8 43 3
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])
function solve(input) {

    let arr = input.slice(0, 1);
    arr = arr[0].split(' ')
        .map((x) => Number(x));

    let data = input.slice(1);

    //console.log(arr)
    function add(a) {
        arr.push(Number(a))
    };

    function remove(a) {
        arr = arr.filter((x) => x !== +a)
    }

    function removeAt(a) {
        arr.splice(+a, 1)
    }

    function insert(a, b) {
        arr.splice(b, 0, +a)
    }

    for (let i = 0; i < data.length; i++) {
        let [cmd, num1, num2] = data[i].split(' ');
        //obj[cmd](num1, num2)

        switch (cmd) {
            case 'Add':
                add(num1)
                break;
            case 'Remove':
                remove(num1)
                break;
            case 'RemoveAt':
                remove(num1)
                break;
            case 'Insert':
                insert(num1, num2)
                break;
        }


    }



    console.log(arr.join(' '))
}


solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])
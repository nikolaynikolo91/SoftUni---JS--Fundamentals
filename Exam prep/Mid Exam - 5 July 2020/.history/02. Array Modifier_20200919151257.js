function solve(input) {
    let arr = input.slice(0, 1)[0].split(' ');
    arr.map((x) => Number(x))

    //console.log(arr)

    for (const line of input.slice(1)) {
        let [cmd, index1, index2] = line.split(' ');

        switch (cmd) {
            case 'swap':
                swap(index1, index2)
                break;

            default:
                break;
        }
    }

    function swap(index1, index2) {
        console.log(arr.join(' '))
        let firstEl = arr[+index1];
        let secondEl = arr[+index2];
        arr[+index1] = secondEl;
        arr[+index2] = firstEl;

        console.log(arr.join(' '))
    }
}


solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
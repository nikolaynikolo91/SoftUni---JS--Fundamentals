function solve(input) {

    let arr = input.slice(0);
    //arr = arr.split(' is going!');

    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].split(' ');
        console.log(element)

    }
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
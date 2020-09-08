function solve(input) {

    let arr = input.split(' ');
    let remove = arr[0].split('');
    let str = arr[1];

    for (const el of remove) {
        str = str.replace(el, '')
    }

    console.log(str)
}

solve('ice kicegiciceeb')
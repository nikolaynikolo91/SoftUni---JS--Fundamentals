function solve(input) {

    let arr = input.split(' ');
    let remove = arr[0].split('');
    let str = arr[1];
    str = '' + str;

    let arr = [];

    for (const el of remove) {
        console.log(el)
       let a = str.replace(el, '')
       console.log(a)
    }

    console.log(str)
}

solve('ice kicegiciceeb')
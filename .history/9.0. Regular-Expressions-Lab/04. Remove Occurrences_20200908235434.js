function solve(input) {

    let arr = input.split(' ');
    let remove = arr[0];
    remove = '[' + arr[0] + ']'
    let str = arr[1];

    re = new RegExp(remove, 'g');

    let a = str.replace(re, "")
    console.log(a)
}

solve('ice kicegiciceeb')
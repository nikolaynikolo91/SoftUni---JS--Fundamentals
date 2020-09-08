function solve(input) {

    let arr = input.split(' ');
    let remove = arr[0];
    let str = arr[1];
    str = '[' + str + ']'

    
    re = new RegExp(`\\b${remove}\\b`, 'gi');

    // for (const el of remove) {
    //     console.log(el)
    //    let a = str.replace(el, '')
    //    console.log(a)
    // }

    let a = str.replace(re,"")

    console.log(a)
}

solve('ice kicegiciceeb')
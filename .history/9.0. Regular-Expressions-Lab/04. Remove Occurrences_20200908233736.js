function solve (input) {

    let arr = input.split(' ');
    let remove = arr[0];
    let str = arr[1];
  
    str = str.replace(remove, '')

    console.log(str)
}

solve ('ice kicegiciceeb')
function solve (input) {

    let arr = input.split(' ');
    let remove = arr[0];
    let str = arr[1];
  
    str = str.replace(/[`${str}`]/g, '')

    console.log(str)
}

solve ('ice kicegiciceeb')
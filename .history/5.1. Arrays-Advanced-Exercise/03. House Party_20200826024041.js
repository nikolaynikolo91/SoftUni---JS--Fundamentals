function solve(input) {

    let arr = input.slice(0);
    //arr = arr.split(' is going!');

   // console.log(arr)

    for (let element of arr) {
      let test = element.split('');
       console.log(test)
    }
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
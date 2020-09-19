function solve (input) {

    let num1 = +input[0];

    let arr1 = [];

    let num2 = Math.round(num1/4);
    let num3 = num1 - (num2* 4)

    console.log(num2)

for (let i = 0; i < num2; i++) {
    if(num1 > 4){
        arr1.push(4)
        num1 -= 4;
    } else {
        arr1.push(num1)
    }
}
   
  console.log(arr1)
}

solve ([ '15', '0 0 0 0' ])
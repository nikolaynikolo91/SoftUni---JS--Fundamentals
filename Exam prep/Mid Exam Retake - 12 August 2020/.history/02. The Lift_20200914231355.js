function solve (input) {

    let num1 = +input[0];

    let arr1 = [];

    let num2 = Math.round(num1/4);
    let num3 = num1 - (num2* 4)

    console.log(num2)

  while (num1 > 0){
      arr1.push(4);
      num1 -= 4;
  }
   
  console.log(arr1)
}

solve ([ '15', '0 0 0 0' ])
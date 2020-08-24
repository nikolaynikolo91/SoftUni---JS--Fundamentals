function solve(num1, num2, num3) {

    // whithout multiplay

    let result = '';

    let arr = [...num1,...num2,...num3];
   
   

    let isZero = arr.find((a) => a == 0);
    let negativeArr = arr.filter(a => a < 0)

     if (isZero !== undefined) {
        result = 'Positive'
    } else if (negativeArr.length % 2 == 0) {
        result = 'Positive'
    } else if (negativeArr.length % 2 == 1) {
        result = 'Negative'
    }

  console.log(result)
}

solve(5,
    12,
    -15
    

)
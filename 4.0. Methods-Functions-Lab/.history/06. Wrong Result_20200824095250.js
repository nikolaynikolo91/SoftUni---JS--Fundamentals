function solve(num1, num2, num3) {

    // whithout multiplay

    let result = '';

    let arr = [];
    arr.push(num1)
    arr.push(num2)
    arr.push(num3)

    let isZero = arr.find((a) => a == 0);
    let negativeArr = arr.filter(a => a < 0)

    console.log(arr);
    console.log(isZero)
    console.log(negativeArr)


}

solve(5,
    -12,
    0

)
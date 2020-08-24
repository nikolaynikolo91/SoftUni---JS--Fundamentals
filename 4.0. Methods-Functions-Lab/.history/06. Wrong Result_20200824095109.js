function solve(num1, num2, num3) {

    // whithout multiplay

    let result = '';

let arr = [];
arr.push(num1)
arr.push(num2)
arr.push(num3)

let isZero = arr.find((a) => a == 0);

console.log(arr);
console.log(isZero)


}

solve(5,
    12,
    -15,
    0
)
function solve(num) {
    let sum = 0;
    let strNum = num.toString();
    for (let index = 0; index < strNum.length; index++) {
        sum += +strNum[index];
        
    }
    console.log(sum)
}
solve(12)
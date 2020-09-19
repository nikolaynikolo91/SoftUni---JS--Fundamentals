function solve (input) {
    let arr = input.split(' ');
    let sum = arr.reduce((a,b)=> +a + +b);
    let average = sum/ arr.length;
    console.log(average)
}

solve ('10 20 30 40 50')
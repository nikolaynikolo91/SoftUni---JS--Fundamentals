function  solve (input) {
    let arr = input.slice(0);
    let firstNum = +arr.shift();
    let lastNum = +arr.pop();

    console.log(firstNum + lastNum)
}

solve (['20', '30', '40'])
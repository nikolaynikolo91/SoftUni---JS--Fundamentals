function solve(num1, num2) {

    function factorial(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorial(num - 1));
        }
    }

    let firstNum = factorial(num1);
    let secondNum = factorial(num2);

    console.log((firstNum / secondNum).toFixed(2))

}

solve(5, 2)
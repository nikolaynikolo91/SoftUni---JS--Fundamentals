function solve(a, b) {
    let arr = [];

    function asciValue(param) {
        return asci(param)
    }

    let num1 = asciValue(a);
    let num2 = asciValue(b);

    for (let i = num1; i < num2; i++) {
        arr.push(i)
    }

    console.log(arr)
}


solve('a',
    'd'
)
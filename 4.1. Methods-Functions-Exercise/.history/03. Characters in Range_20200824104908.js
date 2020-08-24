function solve(num1, num2) {


    function asciValue(param) {
        return param.charCodeAt()
    }

    function makeString(num) {
        return String.fromCharCode(num)
    }

    let num1 = asciValue(a);
    let num2 = asciValue(b);

    function makeArr(a, b) {
        let arr = [];

        for (let i = a + 1; i < b; i++) {
            arr.push(makeString(i))
        }
    }

    return arr;
}

if (num1 > num2) {
    console.log((makeArr(num1, num2)))
} else {
    console.log(makeArr(num2, num1))
}


// solve('a',
//     'd'
// )

// solve ('#',
// ':'
// )

solve('C',
    '#'

)
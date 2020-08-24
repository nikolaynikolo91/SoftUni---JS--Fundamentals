function solve(str1, str2) {


    function asciValue(param) {
        return param.charCodeAt()
    }

    function makeString(num) {
        return String.fromCharCode(num)
    }

    let num1 = asciValue(str1);
    let num2 = asciValue(str2);

    function makeArr(a, b) {
        let arr = [];

        for (let i = a + 1; i < b; i++) {
            arr.push(makeString(i))
        }

        return arr;
    }

    if (num1 > num2) {
        console.log((makeArr(num1, num2).join(' ')))
    } else {
        console.log(makeArr(num2, num1).join(' '))
    }
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
function solve(a, b) {
    let arr = [];

    function asciValue(param) {
        return param.charCodeAt()
    }

    function makeString (num){
        return String.fromCharCode(num)
    }

    let num1 = asciValue(a);
    let num2 = asciValue(b);

    console.log(num1)
    console.log(num2)

     for (let i = num2+1; i < num1; i++) {
       arr.push(makeString(i))
     }

    console.log(arr.join(' '))
  
}


// solve('a',
//     'd'
// )

// solve ('#',
// ':'
// )

solve ('C',
'#'

)
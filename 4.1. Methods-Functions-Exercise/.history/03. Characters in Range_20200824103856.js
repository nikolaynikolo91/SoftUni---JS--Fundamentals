function solve(a, b) {
    let arr = [];

    function asciValue(param) {
        return param.charCodeAt()
    }

    function makeString (num){
        return String.fromCodePoint(num)
       // String.fromCharCode(num)
    }

    let num1 = asciValue(a);
    let num2 = asciValue(b);

     for (let i = num1+1; i < num2; i++) {
       arr.push(makeString(num))
     }

    console.log(arr.join(' '))
  
}


solve('a',
    'd'
)
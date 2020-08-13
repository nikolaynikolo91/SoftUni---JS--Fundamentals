function solve(num) {
    let myObj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    let word = num.toString();
    console.log(myObj[word[word.length - 1]])

}


//solve(512)
solve(1643)
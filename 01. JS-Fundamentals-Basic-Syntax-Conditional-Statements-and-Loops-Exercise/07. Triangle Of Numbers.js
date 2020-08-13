function triangleOfNumbers(n) {

    let output = ''
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            output += row + ' ';
        }
        output += '\n'
    }
    console.log(output)


    // for (let i = 0; i <= n; i++) { //--- alternative way
    //     console.log((i.toString() + ' ').repeat(i))
    // }
}

triangleOfNumbers(5)
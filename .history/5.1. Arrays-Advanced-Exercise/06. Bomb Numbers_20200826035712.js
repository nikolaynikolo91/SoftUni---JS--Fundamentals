function bombNumbers(output, bombInfo) {

    let output = output.slice(0);
    //console.log('da')
    //console.log(sequence.indexOf(bombInfo[0]))
    // console.log(da)
    while (output.indexOf(bombInfo[0]) !== -1) {
        let index = output.indexOf(bombInfo[0]);

        leftSide = output.slice(0, index - bombInfo[1]);
        rightSide = output.slice(index + bombInfo[1] + 1, output.length);

        output = [...leftSide, ...rightSide];
      //  sequence = sequence.reduce((a, b) => a + b);
    }

    
   console.log(output)

    // }

    // console.log(sequence.join(''))
}

// bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
//     [4, 2])

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)
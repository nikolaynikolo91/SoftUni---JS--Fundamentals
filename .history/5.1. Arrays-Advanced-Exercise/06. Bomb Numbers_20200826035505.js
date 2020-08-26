function bombNumbers(sequence, bombInfo) {

    //let output = sequence.slice(0);
    //console.log('da')
    //console.log(sequence.indexOf(bombInfo[0]))
    // console.log(da)
    while (sequence.indexOf(bombInfo[0]) !== -1) {
        let index = sequence.indexOf(bombInfo[0]);

        leftSide = sequence.slice(0, index - bombInfo[1]);
        rightSide = sequence.slice(index + bombInfo[1] + 1, sequence.length);

        sequence = [...leftSide, ...rightSide];
        sequence = sequence.reduce((a, b) => a + b);
    }
   console.log(sequence)

    // }

    // console.log(sequence.join(''))
}

// bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
//     [4, 2])

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)
function bombNumbers(sequence, bombInfo) {

    let output = sequence.slice(0);

    while (output.indexOf(bombInfo[0]) != -1) {
        let index = output.indexOf(bombInfo[0]);

        leftSide = sequence.slice(0, index - bombInfo[1]);
        rightSide = sequence.slice(index + bombInfo[1] + 1, sequence.length);

        output = [...leftSide, ...rightSide];
        // output = output.reduce((a, b) => a + b);

        // console.log(output)

    }
}

// bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
//     [4, 2])

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1]
    [2, 1])
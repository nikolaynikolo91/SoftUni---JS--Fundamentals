function bombNumbers(sequence, bombInfo) {

    let target = bombInfo[0];
    let power = bombInfo[1];

    while (sequence.includes(target) {
        let index = sequence.indexOf(target);

        leftSide = sequence.slice(0, index - bombInfo[1]);
        rightSide = sequence.slice(index + bombInfo[1] + 1, sequence.length);

        sequence = [...leftSide, ...rightSide];
        //  sequence = sequence.reduce((a, b) => a + b);
    }

    let output = sequence.reduce((a, b) => a + b);

    console.log(output)

    // }

    // console.log(sequence.join(''))
}

// bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
//     [4, 2])

// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
// )

// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// )

// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1]
//     )

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)
function bombNumbers(sequence, bombInfo) {
    let index = sequence.indexOf(bombInfo[0]);

    leftSide = sequence.slice(0, index - bombInfo[1]);
    rightSide = sequence.slice(index + bombInfo[1] + 1, sequence.length);

    let output = [...leftSide, ...rightSide];
    output = output.reduce((a, b) => a + b);

    console.log(output)


}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
    [4, 2])
function bombNumbers(sequence, bombInfo) {
    let index = sequence.indexOf(bombInfo[0]);

    console.log(index)
    let leftSide = [];
    let rightSide = [];

    // for (let i = 0; i < index; i++) {
    //     const element = index      
    // }

    leftSide = sequence.slice(0, index - bombInfo[1])
    console.log(leftSide.join(''))


}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
    [4, 2])
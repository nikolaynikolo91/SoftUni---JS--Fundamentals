function bombNumbers(sequence, bombInfo) {

    let arr = sequence.slice(0);
    //console.log('da')
    //console.log(sequence.indexOf(bombInfo[0]))
    // console.log(da)
    while (arr.indexOf(bombInfo[0]) !== -1) {
        let index = arr.indexOf(bombInfo[0]);

        leftSide = arr.slice(0, index - bombInfo[1]);
        rightSide = arr.slice(index + bombInfo[1] + 1, arr.length);

        arr = [...leftSide, ...rightSide];
        //  sequence = sequence.reduce((a, b) => a + b);
    }

let output = arr.reduce((a,b)=> a + b);

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
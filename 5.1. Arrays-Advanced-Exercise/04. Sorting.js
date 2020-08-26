function sorting(arr) {

    let ascendingArr = arr
        .sort((a, b) => a - b)
        .slice(0);
    let descendingArr = arr
        .sort((a, b) => b - a)
        .slice(0);
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            output.push(descendingArr.shift())
        } else {
            output.push(ascendingArr.shift())
        }
    }
    console.log(output.join(' '))
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
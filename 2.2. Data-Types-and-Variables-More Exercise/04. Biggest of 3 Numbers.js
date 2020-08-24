function solve(x, y, z) {

    let arr = [x, y, z]
    let sortArr = arr.sort((a, b) => b - a);
    let biggestNumber = sortArr[0];

    console.log(biggestNumber)
}


solve(-2,
    7,
    3
)
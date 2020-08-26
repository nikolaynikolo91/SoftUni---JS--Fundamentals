function solve(input1, input2) {

    let arr = input1.slice(0, input2[0] - 1);

    arr.splice(0, input2[1]);
    console.log(arr)

}


solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
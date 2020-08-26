function solve(input1, input2) {

    let arr = input1.slice(0, input2[0]);

    arr.splice(0, input2[1]);
    let isNumberArr = arr.filter((x) => x == arr[2]);

    console.log(`Number ${input2[2]} occurs ${isNumberArr.length} times.`)
}


solve([5, 2, 0, 4, 0, 0, 6],
    [5, 2, 3]
)
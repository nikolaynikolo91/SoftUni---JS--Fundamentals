function sortNumbers(x, y, z) {
    let arr = [];
    arr.push(x);
    arr.push(y);
    arr.push(z);

    let sortedArr = arr.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}


sortNumbers(2, 1, 3)
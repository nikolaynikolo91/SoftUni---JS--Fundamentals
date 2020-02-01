function name(arr) {

    let outputArr = [];
    let sumOriginal = 0;

    for (let index = 0; index <= arr.length - 1; index++) {
        sumOriginal += arr[index];

        if (arr[index] % 2 == 0) {
            outputArr.push(arr[index] + index);
        }
        else {
            outputArr.push(arr[index] - index);
        }      
    }
    console.log(outputArr);
    console.log(sumOriginal);
    console.log(outputArr.reduce((firstElement, secondElement) => firstElement + secondElement, 0));
}
    name([5, 15, 23, 56, 35])
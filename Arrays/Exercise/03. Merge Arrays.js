function marge(arr1, arr2) {
    let output = [];
    for (let index = 0; index < arr1.length; index++) {

        if (index % 2==0) {
         let firstElement = Number(arr1[index]);
         let secondElement = Number(arr2[index]);
         output.push(firstElement + secondElement)
        }
        else {
            output.push(arr1[index] + arr2[index])
        }
    }
    console.log(output.join(' - '))
}
marge([1,2,3,4,5,6,7], [2,3,4,5,6,7,8])
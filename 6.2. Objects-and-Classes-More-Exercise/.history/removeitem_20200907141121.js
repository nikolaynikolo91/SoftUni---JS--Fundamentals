function removeItemFromArr(arr1, item1) {
    let item = 'Facebook';
    let arr = ["Facebook", "YouTube", "Google Translate"];

    if (arr.includes(item)) {
        let index = arr.indexOf(item);
        console.log(index)
        arr.splice(index, 1)

    }

    console.log(arr)

}

removeItemFromArr()
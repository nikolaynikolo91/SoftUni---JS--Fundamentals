function removeItemFromArr(arr, item) {

    if (arr.includes(item)) {
        let index = arr.indexOf(item);
        console.log(index)
        arr.splice(index, 1)
    }

    return arr
}

removeItemFromArr()
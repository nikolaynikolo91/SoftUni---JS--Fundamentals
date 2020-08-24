function biggerNumber(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {

        let leftElement = arr[i];
        rightElements = arr.slice(i + 1);
        isBigger = true;

        for (let y = 0; y < rightElements.length; y++) {

            if (leftElement <= rightElements[y]) {
                isBigger = false;
                break;
            }

        }
        if (isBigger) {
            output.push(leftElement)
          
        }
     
    }
    console.log(output.join(' '))
}
biggerNumber([14, 24, 3, 19, 15, 17])
function solve(input) {

    let num1 = +input[0];

    let arr1 = [];

    let num2 = Math.round(num1 / 4);
    let num3 = num1 - (num2 * 4)

    //  console.log(num2)

    for (let i = 0; i < num2; i++) {
        if (num1 > 4) {
            arr1.push(4)
            num1 -= 4;
        } else {
            arr1.push(num1)
        }
    }

    let arr2 = input[1].split(' ');
    let length = arr2.length;

    let emptySlots = false;

    for (let j = 0; j < arr2.length; j++) {
        let sum = arr2[j] + arr1[j];

        if (sum >= 4) {
            arr2[j] = 4;
            arr2[j + 1] = arr2[j + 1] + sum - 4;
        } else {
            arr2[j] = sum;
            emptySlots = true;
        }

    }

    let rest = arr1.slice(length) + arr2.slice(length);
   // rest = rest.reduce((a, b) => a + b)

    if (emptySlots) {
        console.log('The lift has empty spaces!')
    }
    //console.log(arr1)
    console.log(arr2)
    console.log(rest)
}

//solve(['15', '0 0 0 0'])
solve([
    "20",
    "0 2 0"
])
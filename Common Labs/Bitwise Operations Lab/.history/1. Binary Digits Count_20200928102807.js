function solve(arr) {
    let n = arr[0];
    let b = arr[1];

    let toBinary = n.toString(2)

    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }

    console.log(toBinary)
}

solve([20, 0])
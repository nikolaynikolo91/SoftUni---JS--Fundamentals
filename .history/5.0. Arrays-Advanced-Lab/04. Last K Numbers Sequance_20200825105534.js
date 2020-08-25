function solve(n, k) {
    let arr = [];

    arr.push(1);

    for (let i = 1; i < n; i++) {
        let elements = arr.slice(-3);
        let element = sumAll(elements)
        arr.push(element)


    }

    function sumAll(arr) {
        return arr.reduce((a, b) => a + b)
    }

    console.log(arr.join(' '))
}

solve(6, 3)
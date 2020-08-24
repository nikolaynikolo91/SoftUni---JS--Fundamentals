function solve(n, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(n.toFixed(precision)))
}

solve(3.1415926535897932384626433832795, 2)
//solve(10.5, 3)
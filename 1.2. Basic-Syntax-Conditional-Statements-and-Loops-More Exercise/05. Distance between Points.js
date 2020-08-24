function solve(x1, y1, x2, y2) {

    let d = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    let output = Math.sqrt(d);

    console.log(output)
}

solve(2, 4, 5, 0)
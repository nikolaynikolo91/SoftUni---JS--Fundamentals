function solve(n, p) {
    let numToBinary = n.toString(2);
    let pToZero = numToBinary.split('');
    pToZero.splice(p, 1, 0)

    console.log(pToZero.join('').toString(10))
}

solve(1313, 5)
solve(231, 2)
solve(111, 6)
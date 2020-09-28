function solve(n, p) {
    let numToBinary = n.toString(2);
    let pToZero = numToBinary.split('');
    pToZero.splice(p, 1, 0)

    let result = pToZero.join('');

    console.log(Number(result))
}

solve(1313, 5)
solve(231, 2)
solve(111, 6)
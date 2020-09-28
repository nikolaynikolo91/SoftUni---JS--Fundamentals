function solve(n, p) {
    let numToBinary = n.toString(2);
    let pToZero = numToBinary.split('');
    let position = pToZero.length - 1 - p;

    pToZero[position] = 0;

    let result = parseInt(pToZero.join(''), 2)

    console.log(result)
}

solve(1313, 5)
solve(231, 2)
solve(111, 6)
function solve(input) {
let arr = input.slice(0,1)[0].split(' ');
arr.map((x)=> Number(x))

//console.log(arr)

for (const line of input.slice(1)) {
    console.log(line)
}
}


solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
function solve(x, op, y) {

    let result = {
        '+': function (x, y) {
            return x + y
        },
        '-': function (x, y) {
            return x - y
        },
        '/': function (x, y) {
            return x / y
        },
        '*': function (x, y) {
            return x * y
        }
    }

    let output = result[op](x, y);

    console.log(output.toFixed(2))
}

solve(5,
    '+',
    10
)
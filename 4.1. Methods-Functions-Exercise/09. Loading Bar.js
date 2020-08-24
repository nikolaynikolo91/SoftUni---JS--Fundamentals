function solve(num) {
    let arr = []
    let n = Math.trunc(num / 10);

    for (let i = 0; i < n; i++) {
        arr.push('%')
    }

    for (let j = 0; j < 10 - n; j++) {
        arr.push('.')
    }

    let output = arr.join('')

    if (num == 100) {
        console.log(`${num}% Complete!`)
        console.log(`[${output}]`)
    } else {
        console.log(`${num}% [${output}]`)
        console.log(`Still loading...`)
    }
}

solve(100)
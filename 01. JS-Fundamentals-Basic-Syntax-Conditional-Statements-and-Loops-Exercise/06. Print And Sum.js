function printAndSum(x, y) {
    let arr = [];
    for (let i = x; i <= y; i++) {
        arr.push(i)
    }

    let sum = arr.reduce((a, b) => a + b)

    console.log(arr.join(' '))
    console.log(`Sum: ${sum}`)

}


//     let sum = 0; // alternative way
//     let arr = '';

//     for (let i = x; i <= y; i++) {
//         arr += i + ' ';
//         sum += i;
//     }
//     console.log(arr)
//     console.log('Sum: ' + sum)
// 



printAndSum(5, 10)
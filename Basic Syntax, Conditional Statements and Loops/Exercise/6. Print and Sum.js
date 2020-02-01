function printAndSum(start, end) {
    let sum = 0
    let a = "";
    for (let i = start; i <= end; i++) {

        a += `${i} `;
        sum += i;
    }
    console.log(a);
    console.log(`Sum: ${sum}`);
}
printAndSum(1, 15)
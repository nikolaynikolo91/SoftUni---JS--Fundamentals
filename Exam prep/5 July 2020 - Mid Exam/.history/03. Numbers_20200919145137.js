function solve(input) {
    let arr = input.split(' ');
    let sum = arr.reduce((a, b) => +a + +b);
    let average = sum / arr.length;
    //console.log(average)
    arr.map((x) => Number(x));
    if (arr.length < 5) {
        console.log('No')
    } else {
        let filter = arr.filter((x) => x > average);

        let sort = filter.sort((a, b) => b - a);
        let output = sort.slice(0, 5)

        console.log(output.join(' '))
    }
}

//solve('10 20 30 40 50')
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')
function solve(input) {
    let arr = input.split(' ');
    let sum = arr.reduce((a, b) => +a + +b);
    let average = sum / arr.length;
    console.log(average)
    arr.map((x) => Number(x));
    let filter = arr.filter((x) => x > average);

    let sort = filter.sort((a, b) => b - a);
   
    console.log(sort.join(' '))
}

solve('10 20 30 40 50')
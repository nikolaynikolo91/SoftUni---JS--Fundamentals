function solve(input) {
    let peHour = input.slice(0, 3).reduce((a, b) => +a + +b);
    let studentsQuestions = input.slice(3)
        .map((x) => Number(x))
        .reduce((a, b) => a + b);

    let time = Math.ceil(studentsQuestions / peHour)
    time = 9;
    if (time >= 4) {
        let addBreak = time / 4;
        time += addBreak;
    }



    console.log(`Time needed: ${time}h.`)

}


//solve(['5', '6', '4', '20'])
solve(['1', '2', '3', '45'])
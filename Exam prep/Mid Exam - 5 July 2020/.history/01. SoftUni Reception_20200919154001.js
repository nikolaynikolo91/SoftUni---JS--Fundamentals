function solve(input) {
    let peHour = input.slice(0, 3).reduce((a, b) => +a + +b);
    let studentsQuestions = +input[3]

    let time = Math.ceil(studentsQuestions / peHour)
    //time = 7;
    if (time >= 4) {
        let addBreak = Math.floor(time / 4);
        time += addBreak;
    }



    console.log(`Time needed: ${time}h.`)

}


//solve(['5', '6', '4', '20'])
solve(['1', '2', '3', '45'])
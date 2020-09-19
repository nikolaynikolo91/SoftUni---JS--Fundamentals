function solve(input) {
    let peHour = input.slice(0, 3).reduce((a, b) => +a + +b);
    let studentsQuestions = +input[3]

    let hours = 0;
  //  let count = 0;

    while (studentsQuestions > 0) {
        studentsQuestions -= peHour;
        hours++;
    //    count++;
        if (hours % 4 ==0) {
            hours++;
          //  count = 0;
        }
    }

    console.log(`Time needed: ${hours}h.`)
}


//solve(['5', '6', '4', '20'])
//solve(['1', '2', '3', '45'])
solve (['3','2','5','40'])
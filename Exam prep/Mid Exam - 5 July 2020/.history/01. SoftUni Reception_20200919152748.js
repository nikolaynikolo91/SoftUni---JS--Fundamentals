function solve(input) {
let peHour = input.slice(0,3).reduce((a,b)=> +a + +b);
let studentsQuestions = input.slice(3).reduce((a,b)=> +a + +b);

let time = Math.floor(peHour / studentsQuestions)

console.log(time)

}


solve(['5','6','4','20'])
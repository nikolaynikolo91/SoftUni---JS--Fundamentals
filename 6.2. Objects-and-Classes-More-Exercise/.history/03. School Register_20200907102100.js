function solve(input) {

    // let obj = {
    //     grade: number
    //  {
    //         [],
    //         score,
    //     }
    // }
    let arr = [];

    for (const row of input) {
        //   let a = JSON.stringify(row);
        //   let b = JSON.parse(a);

        // let {name, grade, score} = b;

        //let a = row.split(': ');
        //let b = a.split('Student name')
        //let [grade ] = a[2].split(',')
        let tokens = row.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);
        //let namesArr = a[1].split(',')
        let b = tokens[1].split(': ')[1]
        console.log(b)
       // console.log(tokens)
    }
}

solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
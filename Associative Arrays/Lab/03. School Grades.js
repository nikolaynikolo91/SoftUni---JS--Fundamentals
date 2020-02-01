function solve(input) {
    let journal = new Map()

    for (let string of input) {
        let tokens = string.split(' ');
        let name = tokens[0];
        let grades = tokens.slice(1, tokens.length).map(Number);

        if (journal.has(name)) {
            let oldGrades = journal.get(name);
            journal.set(name, oldGrades.concat(grades));
        }
        else {
            journal.set(name, grades);
        }
    }



    let sorted = Array.from(journal.entries())
        .sort((a, b) => average(a[1]) - average(b[1]));

    sorted.forEach(element => {
        console.log(`${element[0]}: ${element[1].join(', ')}`)
    });


    function average(arr) {
        let sum = 0
        arr.forEach(element => sum += element);
        return sum / arr.length;
    }



}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])
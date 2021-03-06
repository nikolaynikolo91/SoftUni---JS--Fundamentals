function solve(input) {

    let arr = input.slice(0);
    //arr = arr.split(' is going!');

    let outputListArr = [];
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].split(' ');
        //  console.log(element.length)
        let name = element[0];

        if (element.length == 3) {
            if (isInTheList(name, outputListArr)) {
                console.log(`${name} is already in the list!`)
            } else {
                addPerson(name, outputListArr);
            }
        } else {
            if (isInTheList(name, outputListArr)) {
                outputListArr = removePerson(name, outputListArr);
            } else {
                console.log(`${name} is not in the list!"). `)

            }
        }

    }

    function isInTheList(person, arr) {
        return arr.includes(person)
    }

    function addPerson(person, arr) {
        return arr.push(person)
    }

    function removePerson(person, arr) {
        return arr.filter((x) => x !== person)
    }

}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
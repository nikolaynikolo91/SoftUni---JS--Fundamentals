function solve(input) {

    let nameRegex = /(?<name>[A-z])/g;
    let numRegex = /(?<num>\d+)/g;

    let nameMatched = nameRegex.exec(input)

    console.log(nameMatched.groups['name'])

}

solve('G!32e%o7r#32g$235@!2e')
function solve(input) {

    let nameRegex = /(?<name>[A-z])/g;
    let numRegex = /(?<num>\d+)/g;

    let nameMatched = input.match(nameRegex)
console.log(nameMatched)
 //   console.log(nameMatched.groups['name'])

}

solve('G!32e%o7r#32g$235@!2e')
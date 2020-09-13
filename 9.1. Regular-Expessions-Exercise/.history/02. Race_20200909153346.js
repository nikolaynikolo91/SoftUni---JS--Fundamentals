function solve(input) {

    let nameRegex = /([A-z])/g;
    let numRegex = /(\d)/g;

    let nameMatched = input.match(nameRegex).join('')
    let numMatched = input.match(numRegex).map((x) => Number(x)).reduce((a, b) => a + b)
    console.log(nameMatched)
    console.log(numMatched)
    //   console.log(nameMatched.groups['name'])

}

solve('G!32e%o7r#32g$235@!2e')
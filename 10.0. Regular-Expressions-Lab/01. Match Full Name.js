function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    

    let text = input[0];
    let validNames = [];
    let validName = null;

    //let arr = text.match(pattern)

    //console.log(arr.join(' '))

    while ((validName = pattern.exec(text)) !== null) {
        validNames.push(validName[0]);

    }

    console.log(validNames.join(' '))

}
solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov']
)
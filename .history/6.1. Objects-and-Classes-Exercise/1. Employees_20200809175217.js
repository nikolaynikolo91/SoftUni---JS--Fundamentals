function solve (imput) {

    let employess = [];
    
    for (let personName of imput) {
        let personObject = {}
        personObject.name = personName;
        personObject.personalNumber = personName.length;

        employess.push(personObject);
    }

    for (let employee of employess) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }

}
solve (
    [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
    )
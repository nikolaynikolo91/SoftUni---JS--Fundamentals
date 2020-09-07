function solve(input) {

    let arr = input.slice(0);
    let objArr = [];

    for (const name of arr) {
        objArr.push({
            name,
            'num': name.length
        })
    }

    for (const element of objArr) {

        console.log(`Name: ${element.name} -- Personal Number: ${element.num}`)


    }



}
solve(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)
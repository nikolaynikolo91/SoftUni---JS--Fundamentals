function solve(input) {

    let arr = input.slice(0);
    let objArr = [];

    for (const name of arr) {
        objArr.push({
            'Name': name,
            'Personal Number': name.length
        })
    }

    for (const element of objArr) {

        Object.entries(element).forEach(([key, value]) => {
            console.log(`${key} -- ${value}`)
        });
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
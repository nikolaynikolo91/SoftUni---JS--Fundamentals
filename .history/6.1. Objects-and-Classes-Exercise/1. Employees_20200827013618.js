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
        let strLeft = '';
        let strRight = '';

        Object.entries(element).forEach((element) => {
           console.log(element)
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
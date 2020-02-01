function solve(charecter) {

    let isLowerCase = charecter === charecter.toLowerCase();
    let isUpperCase = charecter === charecter.toUpperCase();

    if (isUpperCase) {
        console.log(`upper-case`)
    }
    else if (isLowerCase) {
        console.log(`lower-case`)
    }
}
solve(`c`)
function solve(char) {

    let isLowerCase = char === char.toLowerCase();
    let isUpperCase = char === char.toUpperCase();

    if (isUpperCase) {
        console.log(`upper-case`)
    }
    else if (isLowerCase) {
        console.log(`lower-case`)
    }
}
solve(`c`)
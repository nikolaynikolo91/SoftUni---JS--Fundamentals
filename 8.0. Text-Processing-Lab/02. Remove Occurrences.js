function solve (key, text) {
    let result = text;

    while (result.indexOf(key) > -1) {
        result = result.replace(key, "");
    }

    console.log(result)
}
solve ('ice', 'kicegiciceeb')
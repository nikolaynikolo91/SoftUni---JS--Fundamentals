function solve (text, key) {
    let result = text;

    while (result.indexOf(key) != -1) {
        result = result.replace(key, '*'.repeat(key.length));
    }

    console.log(result)
}
solve ("A small sentence with some words", "small")
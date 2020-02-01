function solve (text, key) {

    let result = text
    .split(' ')
    .map((x) => x==key ? '*'.repeat(key.length) :x)
    .join(' ');


    console.log(result)
}

solve ("A small sentence with some words", "small")
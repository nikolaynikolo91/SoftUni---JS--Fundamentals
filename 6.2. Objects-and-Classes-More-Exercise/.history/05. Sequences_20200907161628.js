function sequences(input) {

    let firstArr = [];
    let secondArr = [];

    firstArr = input.map((x) => JSON.parse(x))
        .map((x) => x.sort((a, b) => b - a))
        .map((x) => JSON.stringify(x))

    firstArr.forEach(element => {
        if (!secondArr.includes(element)) {
            secondArr.push(element)
        }
    });

    secondArr.map((x) => JSON.parse(x))
        .sort((a, b) => a.length - b.length)
        .forEach((e) => console.log(`[${e.join(', ')}]`))

}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])
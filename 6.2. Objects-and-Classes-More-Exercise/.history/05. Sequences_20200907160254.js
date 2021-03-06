function sequences(input) {

    let output = [];
    let output2 = [];

    output = input.map((x) => JSON.parse(x))
        .map((x) => x.sort((a, b) => b - a))
        .map((x) => JSON.stringify(x))

    let filtered = output.filter((a, b) => a != b);

    output.forEach(element => {
        if (!output2.includes(element)) {
            output2.push(element)
        }
    });

    console.log(output.length)
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])
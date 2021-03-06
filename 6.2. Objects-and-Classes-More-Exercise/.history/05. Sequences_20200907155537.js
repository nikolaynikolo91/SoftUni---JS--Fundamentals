function sequences(input) {

    let output = [];

    output = input.map((x) => JSON.parse(x))
        .map((x) => x.sort((a, b) => a - b))

    for (const item of output) {
        console.log(item)
    }

    console.log(output.length)
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])
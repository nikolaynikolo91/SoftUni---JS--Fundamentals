function sequences(input) {

    let output = [];
    let output2 = [];

    output = input.map((x) => JSON.parse(x))
        .map((x) => x.sort((a, b) => b - a))
        .map((x) => JSON.stringify(x))

    output.forEach(element => {
        if (!output2.includes(element)) {
            output2.push(element)
        }
    });

    let sorted = output2.sort((a, b) => a.length - b.length)

  
    console.log(sorted.join('\n'))
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])
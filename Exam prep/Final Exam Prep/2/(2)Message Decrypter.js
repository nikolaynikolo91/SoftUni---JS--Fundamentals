function solve(input) {

    let regex = /^([$%])([A-Z][a-z]{2,})\1\: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/

    let textArr = input.slice(1);
    textArr.forEach((line) => {
        let arr = line.match(regex);

        if (arr) {
            let validArr = arr.slice(2);
            let tag = validArr.shift();
            let messages = String.fromCharCode(validArr[0]) +
                String.fromCharCode(validArr[1]) +
                String.fromCharCode(validArr[2]);

            //{tag}: {decryptedMessage}
            console.log(`${tag}: ${messages}`)

        } else {
            console.log(`Valid message not found!`)
        }
    });
}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]
)
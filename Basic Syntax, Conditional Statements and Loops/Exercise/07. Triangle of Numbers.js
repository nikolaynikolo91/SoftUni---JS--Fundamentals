function triagle(num) {
    let output = ``;

    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            output += row + ` `;
        }
        output += '\n';
    }
    console.log(output);

}
triagle(9)
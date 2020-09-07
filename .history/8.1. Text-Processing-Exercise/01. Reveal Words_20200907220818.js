function solve(replaceWord, text) {

    let sepWords = replaceWord.split(', ');

    let output = text.substr(0);

    output.split(' ')
        .forEach(word => {
            let ast = '*'.repeat(word.length);
            if (word === ast) {
                output = output.replace(word, sepWords.find((w) => w.length === ast.length));
            }
        });


    console.log(output)

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)
function solve(replaceWord, text) {

    let separeteWords = replaceWord.split(', ');

    let output = text.substr(0);

    output.split(' ')
        .forEach(word => {
            let asterix = '*'.repeat(word.length);
            if (word === asterix) {
                output = output.replace(word, separeteWords.find((w) => w.length === asterix.length));
            }
        });


    console.log(output)

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)
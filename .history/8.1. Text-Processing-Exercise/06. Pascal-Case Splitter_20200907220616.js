function solve(string) {

    let text = string;
    let isUpperCase = (x) => x === x.toUpperCase();
    let output = [];
    let startIndex = 0;


    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (isUpperCase(char)) {
            let word = text.substring(startIndex, i);
            startIndex = i;
            if (word != '') {
                output.push(word)
            }
        }
        if (i === text.length - 1) {
            let word = text.substring(startIndex)
            output.push(word)
        }
    }


    console.log(output.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
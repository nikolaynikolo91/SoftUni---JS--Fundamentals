function solve(input) {
    let wordFounds = 0;
    let output = [];
    let validPatter = /([#|@])[A-z]{3,}\1\1[A-z]{3,}\1/g;

    if (validPatter.test(input[0])) {
        let arrOfStr = input[0].match(validPatter);
        wordFounds = arrOfStr.length
        arrOfStr.forEach((el) => {
            let pattern = /[A-z]+/g;
            let [firstWord, secondWord] = el.match(pattern);
            let reverseWord = secondWord.split('').reverse().join('');

            if (firstWord === reverseWord) {
                output.push(`${firstWord} <=> ${secondWord}`)
            }

        })
    }
    if (wordFounds !== 0) {
        console.log(wordFounds + ' word pairs found!')
    } else {
        console.log('No word pairs found!')
    }

    if (output.length > 0) {
        console.log('The mirror words are:')
        console.log(output.join(', '))
    } else {
        console.log('No mirror words!')
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
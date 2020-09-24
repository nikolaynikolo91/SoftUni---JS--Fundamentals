function solve(input) {
    let wordFounds = 0;
    let output = [];
    let validPatter = /([#|@])[A-z]{3,}\1\1[A-z]{3,}\1/g;

    if (validPatter.test(input[0])) {
        let arrOfStr = input[0].match(validPatter);
        wordFounds = arrOfStr.length
        arrOfStr.forEch((e) => {
            let pattern = /[A-z]+/g;
            let [firstWord, secondWord] = el.match(pattern);
            let reverseWord = secondWord.split('').reverse().join('');

            if (firstWord === reverseWord) {
                output.push(`${firstWord} <=> ${secondWord}`)
            }

        })
    }

    console.log(wordFounds + ' word pairs found!')
    console.log(output.join(', '))
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
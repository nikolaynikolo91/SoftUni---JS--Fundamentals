function solve(input) {

    let validPatter = /([#|@])[A-z]{3,}\1\1[A-z]{3,}\1/g;

    if (validPatter.test(input[0])){
        let arrOfStr = input[0].match(validPatter);
        console.log(arrOfStr.length + ' word pairs found!')
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
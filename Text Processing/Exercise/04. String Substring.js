function solve(findWord, text) {

    let textArr = text.split(' ').map((x) => x.toLowerCase())
    if (textArr.includes(findWord.toLowerCase())){
        console.log(findWord);
    }else {
        console.log(`${findWord} not found!`)
    }
}

solve('javascript', 'JavaScript is the best programming language'
)
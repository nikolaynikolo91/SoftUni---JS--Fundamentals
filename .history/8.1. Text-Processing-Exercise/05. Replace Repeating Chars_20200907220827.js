function solve(text) {

    let newStr = '';

    for (let i = 0; i < text.length; i++) {
        let currentIndex = text[i];
        if (!(newStr.slice(-1) === currentIndex)) {
            newStr += text[i];
        }
    }

    console.log(newStr)
}

solve('aaaaabbbbbcdddeeeedssaa')
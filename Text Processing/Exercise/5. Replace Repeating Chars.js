function solve (text) {

    let newStr = '';
    
    for (let i = 0; i < text.length; i++) {
        let curentInput = text[i];
        if (!(newStr.slice(-1) === curentInput)) {
            newStr+=text[i];
        }      
    }
    
    console.log(newStr)
}

solve ('aaaaabbbbbcdddeeeedssaa')
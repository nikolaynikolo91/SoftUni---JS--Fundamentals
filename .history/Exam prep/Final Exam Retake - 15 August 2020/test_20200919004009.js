//     let text = 'ABCDAADA'
//     let pattern = RegExp("A", 'g');  
//     text = text.replace(pattern, "*")  
//     console.log(text) // *BCD**D*

// --------------------

let text = 'ABCDAADA'
while (text.includes('A')) {
    let pattern = RegExp("A");
    text = text.replace(pattern)
}
console.log(text)
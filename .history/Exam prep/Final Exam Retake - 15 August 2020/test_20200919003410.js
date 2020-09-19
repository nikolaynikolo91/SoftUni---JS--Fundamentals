function solve (){

    let text = 'ABCDAADA'
    let pattern = RegExp(text, 'g');            

   console.log(text.replace(pattern, "*"))
}
    


solve ()
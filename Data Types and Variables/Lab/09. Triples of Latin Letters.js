function solve(num) {
    for(let index1=0; index1<num; index1++){
     const firstLetter = String.fromCharCode(97+index1)
     for (let index2 = 0; index2 < num; index2++) {
        const secondLetter = String.fromCharCode(97+index2);
        for (let index3 = 0; index3 < num; index3++) {
            const thirdLetter = String.fromCharCode(97+index3);
            console.log(firstLetter+secondLetter+thirdLetter)             
         }
         
     }
 }
}


solve(5)
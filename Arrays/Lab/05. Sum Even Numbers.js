function sumEven(arr) {
    let sum = 0;
    for (const iterator of arr) {
     if (iterator % 2 == 0) {
         sum+= +iterator;
     }
       
    }
    console.log(sum)
    
}
sumEven(['2', '4', '6','1','8'])

//20
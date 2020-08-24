function evenAndOdd(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (const iterator of arr) {
     if (iterator % 2 === 0) {
         sumEven+= +iterator;
     }
     else {
         sumOdd+= +iterator;
     }
       
    }
    let diff = sumEven - sumOdd;
    console.log(diff)
    
}
evenAndOdd(['2', '4', '6','1','8'])

//20

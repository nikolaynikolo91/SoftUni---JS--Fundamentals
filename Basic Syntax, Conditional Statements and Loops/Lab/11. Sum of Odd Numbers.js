function solve (n){
    let odd = 1;
    let oddSum = 1;
    console.log(odd);
   
    
 for (let i = 1; i < n; i++) {
     odd += 2;
     console.log(odd);
     oddSum += odd;
     
 }

console.log(`Sum: `+oddSum);
}
solve (5);
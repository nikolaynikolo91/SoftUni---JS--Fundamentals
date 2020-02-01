function solve(num) {
    var sum = 0;
    var strNumber = String(num);
    for (let index = 0; index < strNumber.length; index++) {
        sum += Number(strNumber[index]);
    }

    var result = String(sum).includes('9');


    console.log(`${num} Amazing? ${result ? 'True' : 'False'}`);
}
solve(1233)
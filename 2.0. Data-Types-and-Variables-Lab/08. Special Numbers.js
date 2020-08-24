function solve(num) {
    var sum = Number(0);
    for (let index = 1; index <= num; index++) {
        var strNum = index.toString();
        sum = Number(0);

        for (let index2 = 0; index2 < strNum.length; index2++) {
            sum += Number(strNum[index2]);

        }
        
        if (sum == 11 || sum == 5 || sum == 7) {
            console.log(`${index} -> True`);
        }
        else {
            console.log(`${index} -> False`);
        }

    }

}

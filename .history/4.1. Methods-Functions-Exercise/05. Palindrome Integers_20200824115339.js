function solve(inputArr) {

     for (const num of inputArr) {
        console.log( palindrome(num))


    }

   //console.log( palindrome(inputArr[0]))

    function palindrome(num) {

        let str = num.toString();

        if (str.length % 2 == 1) {
            let index = (str.length / 2);

            let leftSide = str.slice(0, index);
            let rightSide = str.slice(index + 1, str.length)

            if (leftSide == rightSide) {
                return 'true'
            } else {
                return 'false'
            }
        } else {

        }
    }
}

solve([123, 323, 421, 121])
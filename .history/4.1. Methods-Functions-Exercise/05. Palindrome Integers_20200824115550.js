function solve(inputArr) {

    //  for (const num of inputArr) {
    //     console.log( palindrome(num))


    // }

   console.log( palindrome(inputArr[0]))

    function palindrome(num) {

        let str = num.toString();
        let index = (str.length / 2);

        if (str.length % 2 == 1) {
           
            let leftSide = str.slice(0, index);
            let rightSide = str.slice(index + 1, str.length)

            if (leftSide == rightSide) {
                return 'true'
            } else {
                return 'false'
            }
        } else {
            let leftSide = str.slice(0, index);
            let rightSide = str.slice(index , str.length)

            console.log(leftSide)
            console.log(rightSide)

        }
    }
}

solve([1010, 323, 421, 121])
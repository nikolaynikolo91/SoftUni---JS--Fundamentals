function solve(inputArr) {

    // for (const num of inputArr) {



    // }

    palindrome(inputArr[0])

    function palindrome(num) {

        let str = num.toString();

        if (str.length % 2 == 1) {
            let index = (str.length / 2) + 1;

            let leftSide = str.slice(0, index);
            let rightSide = str.slice(index + 1, str.length-1)

        //    console.log(leftSide)
            console.log(rightSide)
        }
    }
}

solve([123, 323, 421, 121])
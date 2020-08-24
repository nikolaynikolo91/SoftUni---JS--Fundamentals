function solve(inputArr) {

    for (const num of inputArr) {
        console.log(palindrome(num))
    }

    function reverseStr(str) {
        let newStr = str.split('').reverse().join('');
        return newStr
    }

    function palindrome(num) {
        let str = num.toString();
        let index = (str.length / 2);
        let leftSide = '';
        let rightSide = '';
        let reversedRightSide = '';

        leftSide = str.slice(0, index);

        if (str.length % 2 == 1) {
            rightSide = str.slice(index + 1, str.length);
        } else {
            rightSide = str.slice(index, str.length);
        }

        reversedRightSide = reverseStr(rightSide);
        if (leftSide == reversedRightSide) {
            return 'true'
        } else {
            return 'false'
        }
    }
}

solve([1010, 323, 421, 121])
function solve(item) {
    let myArr = item.slice(0, 1);
    //myArr = myArr[0].split(' ');
    let myArr = [];
let str = item[0]
    for (let i = 0; i < str.length - 1; i++) {
        myArr.push(str[i])

    }

    let output = [];

    for (let i = 0; i < myArr.length - 1; i++) {

        let element = myArr[i];
        let arr = [];
        arr.push(element);

        for (let j = i + 1; j < myArr.length - 1; j++) {
            if (element == myArr[j]) {
                arr.push(myArr[j]);
            } else {
                break;
            }
        }

        output.push(arr.join(''));
    }
    let sortedOutput = output.sort((a, b) => b.length - a.length);
    //console.log(sortedOutput)
    console.log(sortedOutput[0].split('').join(' '))
}


solve(["2 1 1 2 3 3 2 2 2 1"]);
//solve([0, 1, 1, 5, 2, 2, 6, 3, 3])
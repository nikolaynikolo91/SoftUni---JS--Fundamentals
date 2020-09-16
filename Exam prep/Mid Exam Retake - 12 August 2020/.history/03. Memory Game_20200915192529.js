function solve(input) {

    let arr = input.slice(0, 1)[0].split(' ');
    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let [firstIndex, secondIndex] = commands[i].split(' ');

        if (arr.length == 0) {
            console.log(`You have won in ${i+1} turns!`);
            break;
        }

        if (firstIndex == secondIndex || !(firstIndex >= 0 && firstIndex <= commands.length - 1) || !(secondIndex >= 0 && secondIndex <= commands.length - 1)) {
            console.log("Invalid input! Adding additional elements to the board")
            //to do insert in middle of arr
            let middle = arr.length / 2;
            let newItem = `-${i}a`;
            arr.splice(middle, 0, newItem, newItem);
        } else {
            firstEl = arr[+firstIndex];
            secondEl = arr[+secondIndex];

            if (firstEl == secondEl) {
                console.log(`Congrats! You have found matching elements - ${firstEl}!`)
                arr.splice(firstIndex, 1, undefined)
                arr.splice(secondIndex, 1, undefined)
                arr = arr.filter((x) => x !== undefined);
            } else {
                console.log(`Try again!`)
            }
        }


    }

    if (arr.length > 0) {
        console.log('Sorry you lose :(')
        console.log(arr.join(' '))
    }
}

solve([
    '1 1 2 2 3 3 4 4 5 5 ',
    '1 0',
    '-1 0',
    '1 0 ',
    '1 0 ',
    '1 0 ',
    'end'
])
function solve(input) {

    let arr = input.slice(0, 1)[0].split(' ');
    let commands = input.slice(1);
    arr = arr.filter((x) => x !== '')

    for (let i = 0; i <= commands.length; i++) {
        if (arr.length == 0) {
            console.log(`You have won in ${i} turns!`);
            break;
        }

        let [firstIndex, secondIndex] = commands[i].split(' ');

        if (firstIndex == 'end') {
            break;
        }


        if (firstIndex == secondIndex || !(firstIndex >= 0 && firstIndex <= commands.length - 1) || !(secondIndex >= 0 && secondIndex <= commands.length - 1)) {
            console.log("Invalid input! Adding additional elements to the board")
            //to do insert in middle of arr
            let middle = arr.length / 2;
            let newItem = `-${i+1}a`;
            arr.splice(middle, 0, newItem, newItem);
        } else {
            let firstEl = arr[+firstIndex];
            let secondEl = arr[+secondIndex];
            if (firstEl == secondEl) {
                console.log(`Congrats! You have found matching elements - ${firstEl}!`)
                arr.splice(firstIndex, 1, '')
                arr.splice(secondIndex, 1, '')
                arr = arr.filter((x) => x !== '');
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

// solve([
//     '1 1 2 2 3 3 4 4 5 5 ',
//     '1 0',
//     '-1 0',
//     '1 0 ',
//     '1 0 ',
//     '1 0 ',
//     'end'
// ])

solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 -1",
    "0 1",
    "end"
])

// solve([
//     '',
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])

// solve ([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ])
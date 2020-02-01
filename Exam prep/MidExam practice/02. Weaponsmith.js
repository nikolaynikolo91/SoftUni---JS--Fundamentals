function solve(arr) {

    let oddArr = [];
    let evenArr = [];

    let weaponParts = arr.shift().split('|');

    for (let iterator of arr) {

        let command = iterator.split(' ');
        let firstWord = command.shift();
        let secondWord = command.shift();

        if (firstWord == 'Move') {
            let value = Number(command.shift());

            if (secondWord == 'Left') {
                if (value > 0 && value <= weaponParts.length) {

                    let removeItem = weaponParts.splice(Number(value), 1);
                    weaponParts.splice(value - 1, 0, removeItem)
                }

            }
            else if (secondWord == 'Right') {
                if (value >= 0 && value < weaponParts.length) {
                    let removeItem = weaponParts.splice(Number(value), 1);
                    weaponParts.splice(value + 1, 0, removeItem)
                }


            }

        }
        else if (firstWord == 'Check') {
           

            for (let i = 0; i < weaponParts.length; i++) {
                let element = weaponParts[i];

                if (i % 2 == 0) {

                    evenArr.push(element);
                }
                else {
                    oddArr.push(element)
                }

            }


            if (secondWord == 'Even') {
                console.log(evenArr.join(' '));
            }
            else if (secondWord == 'Odd') {
                console.log(oddArr.join(' '));
            }

        }
        else if (firstWord == 'Done') {
            console.log(`You crafted ${weaponParts.join('')}!`)
            break;
        }


    }
}

solve(['ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
    ])
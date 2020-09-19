function solve(input) {
    let myArr = {};
    let n = +input[0];
    let myPieces = input.slice(1, n + 1);
    let restInput = input.slice(n + 1);

    for (const line of myPieces) {
        let [piece, composer, key] = line.split('|')
        myArr[piece] = {
            composer,
            key
        }
    }

    for (const line of restInput) {
        let [cmd, piece, composer, key] = line.split('|');

        switch (cmd) {
            case "Add":
                add(piece, composer, key)
                break;
            case "Remove":
                remove(piece);
                break;
            case "ChangeKey":
                changeKey(piece, composer);
                break;
            case "Stop":
                printAll()
                break;

            default:
                break;
        }
    }

    function add(piece, composer, key) {
        if (!(myArr.hasOwnProperty(piece))) {
            myArr[piece] = {
                composer,
                key
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        } else {
            console.log(`${piece} is already in the collection!`)
        }
    }

    function remove(piece) {
        if (!(myArr.hasOwnProperty(piece))) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        } else {
            delete myArr[piece];
            console.log(`Successfully removed ${piece}!`)
        }
    }

    function changeKey(piece, newKey) {
        if (!(myArr.hasOwnProperty(piece))) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        } else {
            myArr[piece]['key'] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        }
    }

    function printAll() {
        let sorted = Object.keys(myArr).sort((a, b) => {
         //   a.localeCompare(b) //|| 
         myArr[b]['composer'].localeCompare(myArr[a]['composer'])
        });

        for (const key of sorted) {
          //"{Piece} -> Composer: {composer}, Key: {key}"
            console.log(`${key} -> Composer: ${myArr[key]['composer']}, Key: ${myArr[key]['key']}`)
        }

    }
}





solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])

//{piece}|{composer}|{key}
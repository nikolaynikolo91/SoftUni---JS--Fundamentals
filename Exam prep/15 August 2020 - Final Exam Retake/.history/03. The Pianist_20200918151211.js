function solve(input) {
    let myObj = {};
    let n = +input[0];
    let myPieces = input.slice(1, n + 1);
    let restInput = input.slice(n + 1);

    for (const line of myPieces) {
        let [piece, composer, key] = line.split('|')
        myObj[piece] = {
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
        if (!(myObj.hasOwnProperty(piece))) {
            myObj[piece] = {
                composer,
                key
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        } else {
            console.log(`${piece} is already in the collection!`)
        }
    }

    function remove(piece) {
        if (!(myObj.hasOwnProperty(piece))) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        } else {
            delete myObj[piece];
            console.log(`Successfully removed ${piece}!`)
        }
    }

    function changeKey(piece, newKey) {
        if (!(myObj.hasOwnProperty(piece))) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        } else {
            myObj[piece]['key'] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        }
    }

    function printAll() {
        let sorted = Object.keys(myObj).sort()

        for (const key of sorted) {
            console.log(`${key} -> Composer: ${myObj[key]['composer']}, Key: ${myObj[key]['key']}`)
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
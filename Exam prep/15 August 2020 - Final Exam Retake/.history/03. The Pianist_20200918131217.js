function solve(input) {

    let myArr = {};

    // let objCmd = {
    //     'Add': add(piece, composer, key)
    // }

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

    // let objCmd = {
    //     'Add': add(piece, composer, key)
    // }

    for (const line of restInput) {
      //  console.log(line)
        let [cmd, piece, composer, key] = line.split('|');
        // objCmd[cmd](piece, composer, key)
        switch (cmd) {
            case "Add":
               add((piece, composer, key))
                break;
        
            default:
                break;
        }
    }


    // restInput.split('|').forEach(([cmd, piece, composer, key]) => {

    // });


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

    console.log(myArr)


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
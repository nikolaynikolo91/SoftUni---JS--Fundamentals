function solve(input) {

    let myArr = {};

    // let objCmd = {
    //     'Add': add(piece, composer, key)
    // }

    let n = input[0];
    let myPieces = input.slice(1, n + 3);
    let restInput = input.slice(n + 1);

    myPieces.split("|").forEach(([piece, composer, key]) => {
        add(piece, composer, key)

    });

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
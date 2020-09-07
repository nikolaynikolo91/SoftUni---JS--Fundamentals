function solve(str) {
    let output = [];
    let halfIndex = str.length / 2;

    let leftSize = str.substr(0, halfIndex)
    let rightSize = str.substr(halfIndex)

    let reversetString = ((x) => {
        const word = x.split('').reverse().join('')
        output.push(word);
    });

    reversetString(leftSize)
    reversetString(rightSize)

    console.log(output.join('\n'))
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
//solve ('1111122222')
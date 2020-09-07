function solve(str) {
    let output = [];
    let halfIndex = str.length / 2;

    let leftSize = str.substr(0, halfIndex)
    let rightSize = str.substr(halfIndex)

    let reverseStr = ((x) => {
        const word = x.split('').reverse().join('')
        output.push(word);
    });

    reverseStr(leftSize)
    reverseStr(rightSize)

    console.log(output.join('\n'))
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
//solve ('1111122222')
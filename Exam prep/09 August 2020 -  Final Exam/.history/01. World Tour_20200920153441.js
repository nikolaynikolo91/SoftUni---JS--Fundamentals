function solve(input) {

    let str = input.shift();

  //  console.log(str)

    for (const line of input.length) {
        console.log(line)
    }
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])
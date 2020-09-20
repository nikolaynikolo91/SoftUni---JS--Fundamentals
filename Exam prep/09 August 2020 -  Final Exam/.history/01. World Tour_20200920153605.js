function solve(input) {

    let str = input.shift();

  //  console.log(str)

  for (let i = 0; i < input.length; i++) {
     let [cmd, index1, index2] = input[i].split(':')
      console.log(cmd)
  }
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])
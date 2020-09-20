function solve(input) {

    let str = input.shift();

  //  console.log(str)

  for (let i = 0; i < input.length; i++) {
      const element = input[i];
      console.log(element)
  }
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])
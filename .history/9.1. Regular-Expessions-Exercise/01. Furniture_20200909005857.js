function solve(input) {

    let pattern = />>(?<name>[\w]+)<<(?<price>[.?\d]+)!(?<quantity>\d+)/g;

    let cmd = input.shift();
    let sum = 0;
    let arr = [];

    while (cmd !== 'Purchase') {
        let validData = pattern.exec(cmd);

        if (validData !== null) {
            let name = validData.groups['name'];
            let pricePerItem = validData.groups['price'];
            let quant = validData.groups['quantity']

            let price = pricePerItem * quant;
            sum += price;
            arr.push(name)

        }
        cmd = input.shift();
    }

    console.log('Bought furniture:');
    for (const itemName of arr) {
        console.log(itemName)
    }
    console.log(`Total money spend: ${sum}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
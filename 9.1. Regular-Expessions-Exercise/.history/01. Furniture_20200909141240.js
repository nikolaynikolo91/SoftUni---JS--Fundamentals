function solve(input) {

    let pattern = />>(?<name>[\w]+)<<(?<price>[.?\d]+)!(?<quantity>\d+)/g;
    let pattern2 = />>(?<name>[A-Z]\w+)<<(?<price>\d+[.]?[0-9]+)!(?<quantity>\d+)/g
    let pattern3 = /(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g

    let cmd = input.shift();
    let sum = 0;
    let arr = [];

    while (cmd !== 'Purchase') {
        // let match = pattern.match(cmd)
        let validData = pattern2.exec(cmd);

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
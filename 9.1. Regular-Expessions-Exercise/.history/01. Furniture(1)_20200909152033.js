function solve(input) {

    let sum = 0;
    let arr = [];

    let cmd = input.shift();

    while (cmd !== 'Purchase') {
        let pattern = />>(?<name>.+)<<(?<price>[\d]+[\.]?[\d]+)\!(?<quantity>[\d]+)/g;

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
    console.log(`Total money spend: ${sum.toFixed(2)}`)
}
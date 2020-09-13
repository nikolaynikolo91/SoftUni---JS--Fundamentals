function solve(input) {

    let pattern = />>(?<name>[\w]+)<<(?<price>[.?\d]+)!(?<quantity>\d+)/g;
    let pattern2 = />>(?<name>[A-Z]\w+)<<(?<price>\d+[.]?[0-9]+)!(?<quantity>\d+)/g
    let pattern3 = /(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;

    let pattern4 = />>(?<name>[\w]+)<<(?<price>[\d]+\.?)\!(?<quantity>[\d]+)/g;

    //  let cmd = input.shift();
    let sum = 0;
    let arr = [];

    for (const line of input) {

        let exec = pattern4.test(line)
        console.log(exec)
    }

    // while (cmd !== 'Purchase') {
    //     // let match = pattern.match(cmd)
    //     let validData = pattern4.exec(cmd);

    //     if (validData !== null) {
    //         let name = validData.groups['name'];
    //         let pricePerItem = validData.groups['price'];
    //         let quant = validData.groups['quantity']

    //         let price = pricePerItem * quant;
    //         sum += price;
    //         arr.push(name)

    //     }
    //     cmd = input.shift();
    // }

    // console.log('Bought furniture:');
    // for (const itemName of arr) {
    //     console.log(itemName)
    // }
    // console.log(`Total money spend: ${sum}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
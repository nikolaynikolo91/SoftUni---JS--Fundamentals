function solve(input) {

    let sum = 0;

    console.log('Bought furniture:');
    for (const line of input) {
        const pattern = />>(?<name>.+)<<(?<price>[\d]+[\.]?[\d]+)\!(?<quantity>[\d]+)/g;
        const matched = pattern.exec(line);

        //let isMatched = pattern.test(line)
        if (isMatched !==null) {
            const {
                name,
                price,
                quantity
            } = matched.groups

            console.log(name);
            sum += +price + +quantity;
        }

        
    }

    console.log(`Total money spend: ${sum}`)
}


solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
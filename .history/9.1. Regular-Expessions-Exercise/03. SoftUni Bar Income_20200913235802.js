function solve(input) {


    for (const line of input) {

        let fullPatternValidation = /%(?<name>[A-Z]{1}[a-z]+)%([^\.\|\$%]*)<(?<product>\w+)>([^\.\|\$%]*)\|(?<count>\d+)\|([^\.\|\$%]*)(?<price>[.?\d]+)\$/g
        
        if (fullPatternValidation.test(line)) {
            let namePattern = /%(?<name>[A-Z]{1}[a-z]+)%/g;
            let prodPattern = /<(?<product>\w+)>/g;
            let countPattern = /\|(?<count>\d+)\|/g;
            let pricePattern = /(?<price>[.?\d]+)\$/g;
    
            let allRestPattern = /([^\.\|\$%]*)/g;

           // let groups = fullPatternValidation.exec(line);
            let priceGroup = pricePattern.exec(line);

            let name = namePattern.exec(line)[1];
            let product = groups['product'];
            let count = groups['count'];
            let price = priceGroup['price'];

            console.log(`${name}: ${product} - ${(count*price).toFixed(2)}`)
        }
    }
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
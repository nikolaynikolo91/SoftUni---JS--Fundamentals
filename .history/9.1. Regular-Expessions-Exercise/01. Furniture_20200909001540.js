function solve(input) {

    let pattern = />>(?<name>[\w]+)<<(?<price>\d+[.]?\d+)!(?<quantity>\d+)/g;

    while (input !== 'Purchase') {

        let validData = pattern.exec(input);

        if (validData !== null) {

        }

        console.log('da')
    }
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
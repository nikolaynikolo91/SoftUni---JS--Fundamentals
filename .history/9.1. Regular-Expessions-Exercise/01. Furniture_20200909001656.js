function solve(input) {

    let pattern = />>(?<name>[\w]+)<<(?<price>\d+[.]?\d+)!(?<quantity>\d+)/g;

    while (input[0] !== 'Purchase') {

        let validData = pattern.exec(input[0]);

        if (validData !== null) {
            console.log('da')

        }
        input.shift();
    }
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
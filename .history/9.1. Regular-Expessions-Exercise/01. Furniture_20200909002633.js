function solve(input) {

    let pattern = />>(?<name>[\w]+)<<(?<price>[.?\d]+)!(?<quantity>\d+)/g;
    let pattern2 = />>(?<name>[\w]+)<<(?<price>\d+)!(?<quantity>\d+)/g;

    let cmd = input.shift();

    while (cmd !== 'Purchase') {

        let validData = pattern.exec(cmd);

        if (validData !== null) {

            console.log('da')
        }
        cmd = input.shift();
    }
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
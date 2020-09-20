function solve(input) {

    let points = 0;
    let output = [];
    let pattern = /(=|\/)([A-Z]{1}\w{2,})\1/g;
    let secondPattern = /\w+/g;

    if (pattern.test(input)) {
        let matched = input.match(pattern);
        output = matched.join(' ').match(secondPattern)
        points = output.reduce((a, b) => {
            return a + b.length
        }, 0)
    }

    console.log(`Destinations: ${output.join(', ')}`)
    console.log(`Travel Points: ${points}`)
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
//solve('/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
function solve(input) {

    //let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

    if (pattern.test(input)) {
        let matched = input.match(pattern);
        let pattern2 = /\w+/g;
        let matched2 = matched.join(' ').match(pattern2)

        if (matched2.length > 1) {
            let sum = 0;
            // for (const el of matched2) {
            //     sum += el.length
            // }
            let points = matched2.reduce((a, b) => {

                return a + b.length
            }, 0)
            console.log(`Destinations: ${matched2.join(', ')}`)
            console.log(`Travel Points: ${points}`)
        } else {
            console.log(`Destinations: ${matched2[0]}`)
            console.log(`Travel Points: ${matched2[0].length}`)
        }
    } else {
        console.log(`Destinations: `)
        console.log(`Travel Points: 0`)
    }

}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
//solve('/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
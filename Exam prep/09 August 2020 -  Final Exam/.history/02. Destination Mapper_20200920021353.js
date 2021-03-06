function solve(input) {

    let pattern = /([=\/])([A-Z][a-z]{3,})\1/g;

    let matched = input.match(pattern);
    if (matched != null) {
        let pattern2 = /[A-Z][a-z]{3,}/g;
        let matched2 = matched.join('-').match(pattern2)
        if (matched2.length > 1){
            let points = matched2.reduce((a, b) =>  a.length + b.length)
            console.log(`Destinations: ${matched2.join(', ')}`)
            console.log(`Travel Points: ${points}`)
        } else {
            console.log(`Destinations: ${matched2.join(', ')}`)
            console.log(`Travel Points: ${matched2[0].length}`)
        }
    } else {
        console.log(`Destinations: `)
        console.log(`Travel Points: 0`)
    }

}

solve('=HHawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
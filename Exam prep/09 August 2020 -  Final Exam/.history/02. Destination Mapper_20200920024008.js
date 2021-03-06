function solve(input) {

    //let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

    let matched = input.match(pattern);
    if (matched != null) {
        let pattern2 = /([A-Z][A-Za-z]{2,})/g;
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

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
solve('/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
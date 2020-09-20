function solve(input) {

    let pattern = /([=\/])([A-Z][a-z]{3,})\1/g;

    let matched = input.match(pattern);
    if (matched != null) {
        let pattern2 = /[A-Z][a-z]{3,}/g;
        let matched2 = matched.join('-').match(pattern2)
        let points = matched2.reduce((a, b) => a.length + b.length)
        console.log(matched2)
        console.log(points)
    }

}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
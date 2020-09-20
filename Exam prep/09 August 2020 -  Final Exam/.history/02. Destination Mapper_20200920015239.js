function solve (input){

    let pattern = /([=\/])([A-Z][a-z]{3,})\1/g;

    let matched = input.match(pattern);
    console.log(matched)
}

solve ('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
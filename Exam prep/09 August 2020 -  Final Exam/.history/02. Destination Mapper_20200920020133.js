function solve (input){

    let pattern = /([=\/])([A-Z][a-z]{3,})\1/g;

    let matched = input.match(pattern);
    if(matched != null){
        let pattern2 = /[A-Z][a-z]{3,}/g;
        let matched2 = matched.join('-')
        let output = matched2.match(pattern2)
        //.match(pattern2)

        console.log(output)
    }

}

solve ('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
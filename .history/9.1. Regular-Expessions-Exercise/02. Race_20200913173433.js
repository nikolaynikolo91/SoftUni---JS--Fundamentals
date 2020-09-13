function solve(input) {

    let myObj = {};
    let keysName = input.slice(0, 1)[0].split(', ');

    for (const name of keysName) {
        // let person = {
        //     name,
        //     'sum': 0
        // }
        myObj[name] = 0;

    //  myObj =   Object.assign(myObj, )
    }

    for (const line of input.slice(1)) {
        let nameRegex = /[A-Za-z]/g;
        let numRegex = /(\d)/g;

        isName = nameRegex.test(line);
        isNum = numRegex.test(line);

        if (isName && isNum) {
            let nameMatched = line.match(nameRegex).join('')
            let numMatched = line.match(numRegex).reduce((a, b) => Number(a) + Number(b));

            if (myObj.hasOwnProperty(nameMatched)) {
                myObj[nameMatched] += numMatched;
            }
        }

    }

     let sorted = myObj.sort((a,b)=> myObj[a] - myObj[b])

   for (const line of sorted) {
       console.line(`${line} - ${myObj[line]}`)
   }

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])